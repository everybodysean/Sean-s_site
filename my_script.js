function formvalidation(){
    var name=document.myform.sean.value;

    if(name==null || name==""){
        alert("Enter username first");
        return false
    }
    else if(name=="sean12"){
        return false
    }
    var name=document.myform.bergado.value;

    if(name==null || name==""){
        alert("Enter password first");
        return false
    }
    else if(name=="bergado"){
        return true
    }
    else alert("Invalid Username and Password");{
        return false
    }
}