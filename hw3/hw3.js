//Angelo Pana
//Javascript
//Using recersion to do the factorials
function factorial(n) {
   if (n < 0)
       return -1;
    else if (n == 0)
        return 1;
    else{
        return (n * factorial(n-1));
    }
}

//Function to create table rows and create more rows with rows
function addRow(content,morecontent)
{
         if (!document.getElementsByTagName) return;
         tabBody=document.getElementsByTagName("table").item(0);
         row=document.createElement("tr");
         cell1 = document.createElement("td");
         cell1.setAttribute("nHeader", "n");

         cell2 = document.createElement("td");
         cell2.setAttribute("factHeader", "f");

         //gets n into node 1
         textnode1=document.createTextNode(content);
         //gets factorial into node 2
         textnode2=document.createTextNode(morecontent);

         //sets both n & facotirl into the cells
         cell1.appendChild(textnode1);
         cell2.appendChild(textnode2);

         row.appendChild(cell1);
         row.appendChild(cell2);

         //inserts it in the table
         tabBody.appendChild(row);


}