%{
 #include <stdio.h>
#include<stdlib.h>
#include "calc1.tab.h"
int yyerror();
extern int yylval;
%}
%%
[a-z]     {
           
            yylval = *yytext - 'a';
            return(VARIABLE);
          }
[0-9]+     {
            
            yylval = atoi(yytext);
            return(INTEGER);
          }
[-+()=/*\n] {
return *yytext;
   }
[ \t];
. yyerror();
%%
int yywrap(void)
{
return 1;
}
