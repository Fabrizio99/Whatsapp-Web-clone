const profileImage = document.getElementById('profileImage');
const profileContainer = document.getElementById('profileContainer');
const backButtonProfile = document.getElementById('backButtonProfile');
const profilePhoto = document.getElementById('profilePhoto');
const infoProfileContainer = document.getElementById('infoProfileContainer');

if(profileImage)
    profileImage.addEventListener('click',function(){
        profileContainer.classList.remove('profile-slide-reverse');
        profileContainer.classList.add('profile-slide');
        profilePhoto.classList.toggle('photo-efect');
        infoProfileContainer.classList.toggle('info-profile-container');
    })
if(backButtonProfile)
    backButtonProfile.addEventListener('click',function(){
        profileContainer.classList.remove('profile-slide');
        profileContainer.classList.add('profile-slide-reverse');
        profilePhoto.classList.toggle('photo-efect');
        infoProfileContainer.classList.toggle('info-profile-container');
    })