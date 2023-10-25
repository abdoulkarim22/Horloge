 const secondDiv = document.querySelector('.second');
 const minDiv = document.querySelector('.minute');
 const hourDiv = document.querySelector('.hour');
 function miseEnPlace() {
       const now = new Date();     // console.log(now);
     //L'aiguille des secondes
     const seconds = now.getSeconds();

     //on prend les secondes / 60 car 60 secondes dans une minutes
     //que l on multiplie par 360° puis on ajoutes 90 car on a déplacé
     // de 90° l aiguille.
     //position en degré des secondes actuelles
     const secondDeg = ((seconds / 60) * 360) + 90;
     secondDiv.style.transform = `rotate(${secondDeg}deg)`;

     //L'aiguille des minutes
     const mins = now.getMinutes();

     //placement de l aiguille des minutes en fonction des degrés mais également en fonction des secondes ecoulé
     // 6 degrés = 1 minute (6* 60 = 360) donc tour complet de l horloge
     const minDeg = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
     minDiv.style.transform = `rotate(${minDeg}deg)`;
    
     //L'aiguille des heures
     const hour = now.getHours();
    
     //30 = 1 h en deg
     const hourDeg = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
     hourDiv.style.transform = `rotate(${hourDeg}deg)`;
 }
 setInterval(miseEnPlace, 1000);