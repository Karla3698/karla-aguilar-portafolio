window.onscroll = () =>{
    let header = document.querySelector('');

    header.classList.toggle('sticky', window.scrollY > 100);
}