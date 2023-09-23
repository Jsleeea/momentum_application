const backgroundPointer =document.querySelector('.background-img');

let img = [
		   'https://c4.wallpaperflare.com/wallpaper/619/617/138/city-lights-wet-street-water-city-wallpaper-preview.jpg',//soso
		   'https://wallpaperaccess.com/full/685208.jpg',//soso
		   'https://wallpaperaccess.com/full/51840.jpg',//soso
		   'https://wallpaperaccess.com/full/365642.jpg',//soso
		   'https://wallpaperaccess.com/full/685348.jpg',//good
		   'https://wallpaperaccess.com/full/3213851.jpg',//good
		  ];
//https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg
let i = Math.round(Math.random()*10)%img.length;// print 0,1,2 ramdomly

backgroundPointer.style.backgroundImage = `url(${img[i]})`;