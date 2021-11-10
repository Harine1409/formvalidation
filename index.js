function validate()
{
    // name validation
    
    let res=document.getElementById("name").value;
    
    if(res.length==0  )
    {
        // document.getElementById("msg").innerHTML="name cannot be empty**";
        // document.getElementById("msg").style.color="red";
       alert("name cannot be empty");
        return false;
        
    }
    else if(isNaN(res)==false)
    {
        alert("name cannot contain numbers!");
        return false;
    }
    else if(res.length<=2)
    {
        // document.getElementById("msg").innerHTML="name cannot be less than 2 letters**";
        // document.getElementById("msg").style.color="red";
        alert("name cannot be less than 2 letters");
        return false;
    }
    else if(res.length>=20)
    {
        // document.getElementById("msg").innerHTML="name cannot be too long**";
        // document.getElementById("msg").style.color="red";
        alert("name cannot be more than 20 letters");
        return false;
    }
   
    
    // name validation

    //age validation
    let ageres=document.getElementById("age").value;
    if(ageres==0){
        // document.getElementById("agemsg").innerHTML="age cannot be empty**";
        // document.getElementById("agemsg").style.color="red";
       alert("age cannot be empty");
        return false;
    }
     if(ageres<0 || ageres>=100  )
    {
    //     document.getElementById("agemsg").innerHTML="age should be between 1 to 99**";
    //    document.getElementById("agemsg").style.color="red";
        alert("age should be between 1 to 99");
        return false;
    }
     if(isNaN(ageres)==true){
        // document.getElementById("agemsg").innerHTML="enter a proper age**";
        // document.getElementById("agemsg").style.color="red";
        alert("enter a proper age");
        return false;
    }
    //age validation

    //ph no validate
    // let phres=document.getElementById("age").value;
    // let t= /^[6-9]{1}[0-9]{9}$/.test(phres);
    // if(t==false)
    // {
    //     document.getElementById("phmsg").innerHTML="enter a valid phone number";
    //     document.getElementById("phmsg").style.color="red";
    //     return false;
    // }

    //email validation
    let emailres=document.getElementById("email").value;
    //let regx= /^([a-zA-Z0-9\._]+)*@([a-zA-Z0-9]+)*(\.[a-z{2-8}]) $/.test(emailres);
    let regx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailres);
    if(regx==false)
    {
        // document.getElementById("mailmsg").innerHTML="enter a valid email id**";
        // document.getElementById("mailmsg").style.color="red";
        alert("enter a valid email id");
        return false;
    }

    //password validation
    let password1res=document.getElementById("password1").value;
    let password2res=document.getElementById("password2").value;
     if(password1res==0 || password2res==0)
    {
        // document.getElementById("ps1msg").innerHTML="password cannot be empty**";
        // document.getElementById("ps1msg").style.color="red";
        alert("password cannot be empty");
        return false;
    }

     if(password1res!=password2res)
    {
    //     document.getElementById("ps2msg").innerHTML="password does not match**";
    //    document.getElementById("ps2msg").style.color="red";
        alert("password does not match");
        return false;
    }
      
else{
    document.write("Registered details:  ");
    document.write("<br>");
    document.write(res+" ");
    document.write("<br>");
    document.write(ageres+" ");
    document.write("<br>");
    document.write(emailres+" ");
    alert("you have registered sucessfully!!!")
}
    
        

}
