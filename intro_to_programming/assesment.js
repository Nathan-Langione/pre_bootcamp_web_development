var msg ='codingdojo';
for(var x = 1; x < msg.length -4; x++)
{
    if(msg.length==2)
    {
        for (var i =3; i < 6; i++)
        {
            console.log(i);
        }
    }
    else
    {
        for (var i = msg.length; i > (msg.length -1);i--)
        {
            console.log(i);
        }
    }
}

