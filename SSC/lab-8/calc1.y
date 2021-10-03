
%token INTEGER VARIABLE 
%left '+' '-' 
%left '*' '/' 
 
%{ 
 void yyerror(); 
 int yylex(void); 
 int sym[26]; 
%} 
 
%% 
 
program: 
 program statement '\n' 
 | 
 ; 
 
statement: 
 expr { printf("%d\n", $1); } 
 | VARIABLE '=' expr { sym[$1] = $3; } 
 ; 
 
expr: 
 INTEGER 
 | VARIABLE { $$ = sym[$1]; } 
 | expr '+' expr { $$ = $1 + $3; } 
 | expr '-' expr { $$ = $1 - $3; } 
 | expr '*' expr { $$ = $1 * $3; } 
 | expr '/' expr { $$ = $1 / $3; } 
 | '(' expr ')' { $$ = $2; } 
 ; 
 
%% 
 
void yyerror() { 

 
} 
 
int main(void) { 
 yyparse(); 
 return 0; 
}
