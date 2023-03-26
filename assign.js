const btn=document.querySelector('.btn');
const modal_btn=document.querySelector('.modal-btn');
const image_input=document.querySelector('.image-input');
const image=document.querySelector(".img-container");
const modal_image=document.querySelector(".modal-img-container");
const container=document.querySelector(".container");
const modal=document.querySelector(".modal");
const original=document.querySelector(".original");
const heart=document.querySelector(".heart-btn");
const square=document.querySelector(".square-btn");
const circle=document.querySelector(".circle-btn");
const rectangle=document.querySelector(".rectangle-btn");


btn.addEventListener('click',()=>{
    image_input.click();
})

modal_btn.addEventListener('click',()=>{
    container.style.display='flex';
    modal.style.display='none';
})


image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        image.style.backgroundImage = `url(${uploaded_image})`;
        container.style.display='none';
        modal.style.display='flex';
        modal_image.style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});

original.addEventListener('click',()=>{
    modal_image.classList.add('original');
    modal_image.classList.remove('heart');
    modal_image.classList.remove('square');
    modal_image.classList.remove('circle');
    modal_image.classList.remove('rectangle');
    image.classList.add('original');
    image.classList.remove('heart');
    image.classList.remove('square');
    image.classList.remove('circle');
    image.classList.remove('rectangle');
});

heart.addEventListener('click',()=>{
    modal_image.classList.remove('original');
    modal_image.classList.add('heart');
    modal_image.classList.remove('square');
    modal_image.classList.remove('circle');
    modal_image.classList.remove('rectangle');
    image.classList.remove('original');
    image.classList.add('heart');
    image.classList.remove('square');
    image.classList.remove('circle');
    image.classList.remove('rectangle');
});

square.addEventListener('click',()=>{
    modal_image.classList.remove('original');
    modal_image.classList.remove('heart');
    modal_image.classList.add('square');
    modal_image.classList.remove('circle');
    modal_image.classList.remove('rectangle');
    image.classList.remove('original');
    image.classList.remove('heart');
    image.classList.add('square');
    image.classList.remove('circle');
    image.classList.remove('rectangle');
});

circle.addEventListener('click',()=>{
    modal_image.classList.remove('original');
    modal_image.classList.remove('heart');
    modal_image.classList.remove('square');
    modal_image.classList.add('circle');
    modal_image.classList.remove('rectangle');
    image.classList.remove('original');
    image.classList.remove('heart');
    image.classList.remove('square');
    image.classList.add('circle');
    image.classList.remove('rectangle');
});

rectangle.addEventListener('click',()=>{
    modal_image.classList.remove('original');
    modal_image.classList.remove('heart');
    modal_image.classList.remove('square');
    modal_image.classList.remove('circle');
    modal_image.classList.add('rectangle');
    image.classList.remove('original');
    image.classList.remove('heart');
    image.classList.remove('square');
    image.classList.remove('circle');
    image.classList.add('rectangle');
});

 