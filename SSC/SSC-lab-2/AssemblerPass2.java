import java.io.*;
import java.util.*;

class TabValueHolder 															//Class to create and operate symbol table 
{
	String address;
	String len;

	public String getAddress() 													//method to fetch address of symbol
	{
		return address;
	}

	public void setAddress(String address) 										//method to put address of symbol
	{
		this.address = address;
	}

	public String getLength() 														//method to fetch index position of symbol
	{
		return len;
	}

	public void setLength(String len) 											//method to put index of symbol 
	{
		this.len = len;
	}
	
}

public class AssemblerPass2
{
	public static void main(String[] args) throws IOException
	{
		LinkedHashMap<String, TabValueHolder> SYMTAB = new LinkedHashMap<>();
		ArrayList<String> finalCode = new ArrayList<>();
		File symfile = new File("symbol_table.txt");
		FileReader fs;
		try
		{
			fs = new FileReader(symfile);
			BufferedReader bs = new BufferedReader(fs);
			String line;
			while((line=bs.readLine())!= null)
			{
				String[] tokens = line.split("\t");
				TabValueHolder symtabHolder = new TabValueHolder();
				SYMTAB.put(tokens[0],symtabHolder);
				symtabHolder.setAddress(tokens[2]);
				symtabHolder.setLength(tokens[3]);
			}
			bs.close();
		}
		catch (IOException e)
		{
			e.printStackTrace();
		}
		File outfile = new File("output_pass1.txt");
		FileReader fo;
		finalCode.add("LC |M/C|OP1|OP2");
		finalCode.add("---------------");
		try
		{
			fo = new FileReader(outfile);
			BufferedReader bo = new BufferedReader(fo);
			String line;
			while ((line = bo.readLine())!= null)
			{
				String finalLine = "";
				String[] tokens = line.split(" ");
				int flag=0;
				for (int i=0; i < tokens.length; ++i)
				{
					//tokens[i]=tokens[i].replaceAll("\\s","");
					//System.out.println(tokens[i]);
					String[] subt=tokens[i].split(",");
					//System.out.println(subt.length);
					if (subt.length==1 && !(subt[0].equals("")))
					{
						if (i!=0)
							finalLine+=subt[0]+"  |";
						else
							finalLine+=subt[0]+"|";
						flag=1;
					}
					else if (subt.length>1)
					{
						if (subt[0].equals("IS"))
						{
							//System.out.println(subt[0]+" "+subt[1]);
							if (subt[1].equals("0"))
							{
								finalLine+="0  |0  |0";
								break;
							}
							else
								finalLine+= subt[1] +"  |";
							flag=1;
						}
						else if (subt[0].equals("DL"))
						{
							flag=1;
							//System.out.println(subt[0]+" "+subt[1]);
							if (subt[1].equals("2"))
							{
								int counter=Integer.parseInt(tokens[i-1]);
								String[] sub=tokens[i+1].split(",");
								int end=counter+Integer.parseInt(sub[1]);
								while(counter<end)
								{
									finalLine=counter + "|0  |0  |0";
									finalCode.add(finalLine);
									flag=0;
									++counter;
								}
							}
							else
								finalLine+="0  |0  |0";
							break;
						}
						else if (subt[0].equals("S"))
						{
							flag=1;
							//System.out.println(subt[0]+" "+subt[1]);
							if (SYMTAB.containsKey(subt[1]))
								finalLine+=SYMTAB.get(subt[1]).getAddress();
							else
								System.out.println("Error");
						}
						else
							break;
					}
					else
						break;
				}
				if (flag==1)
					finalCode.add(finalLine);
				finalLine="";
			}
		}
		catch (Exception e)
		{
			System.out.println("Error in conversion");
			System.exit(0);
		}
		File fout = new File("output.txt");													//Storing Intermediate code in a text file
		FileOutputStream fos = new FileOutputStream(fout); 
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(fos));
		for (String line : finalCode) 
		{
			bw.write(line + "\n");
		}
		bw.close();
		fos.close();
	}
}