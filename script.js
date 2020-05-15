const profileImage = document.getElementById('profileImage');
const profileContainer = document.getElementById('profileContainer');
const backButtonProfile = document.getElementById('backButtonProfile');
if(profileImage)
    profileImage.addEventListener('click',function(){
        profileContainer.classList.remove('profile-slide-reverse');
        profileContainer.classList.add('profile-slide');
    })
if(backButtonProfile)
    backButtonProfile.addEventListener('click',function(){
        profileContainer.classList.remove('profile-slide');
        profileContainer.classList.add('profile-slide-reverse');
    })