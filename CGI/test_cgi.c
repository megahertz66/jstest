#include "cgic.h"
#include <stdio.h>

extern char *cgiQueryString;

void cgiOutPut()
{
    char label[101];
    fprintf(cgiOut, "<H1>%s</H1>\n",cgiQueryString);
    cgiFormString("address", label, 100);
    fprintf(cgiOut, "<p>%s</p>", label);
}

int cgiMain()
{
    cgiOutPut();
    return 0;
}