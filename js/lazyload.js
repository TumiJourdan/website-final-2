//Code accredited to https://www.youtube.com/watch?v=ieIdDAHDaiM

let options = {
    root:null, // the browsers viewpoint
    rootMargin: '0px',
    threshold:0.25,

};

let callback =(entries, observer)=>{
    entries.forEach(entry=>
        {
            if(entry.isIntersecting
                && entry.target.className === 'image'){
                    let imageUrl = entru.target.getAttribute('data-img');
                    if (imageUrl){
                        entry.target.src = imageUrl;
                        observer.unobserver(entry.target);
                    }

                }
        });
}
let observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('#image1'));
observer.observe(document.querySelector('#image2'));
observer.observe(document.querySelector('#image3'));
observer.observe(document.querySelector('#image4'));
observer.observe(document.querySelector('#image5'));
observer.observe(document.querySelector('#image6'));
observer.observe(document.querySelector('#image7'));
observer.observe(document.querySelector('#image8'));
observer.observe(document.querySelector('#image9'));
observer.observe(document.querySelector('#image10'));

