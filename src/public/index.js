
const form = document.getElementById('productForm')

form.addEventListener('submit',e=>{
    e.preventDefault();
    let formData = new FormData(form);
    fetch('/api/products',{
        method:'POST',
        body:formData
    }).then(result=>result.json).then(json=>console.log(json))
})