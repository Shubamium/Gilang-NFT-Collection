// Script untuk dropdown

function toggleDropDown(dropDown){

    // dropDown.querySelector();
    let ddContent = dropDown.parentElement.querySelector('.dropDown-item');


    // Remove or add hidden class to the content
    if(ddContent.classList.contains('hidden')){

        ddContent.classList.remove('hidden');

    }else{

        ddContent.classList.add('hidden');

    }

    // Update indicator
    if(dropDown.querySelector('.dropdown-ic') != null){
        let indicator = dropDown.querySelector('.dropdown-ic');
        
        if(indicator.classList.contains('chevron-flipped')){
            
            indicator.classList.remove('chevron-flipped');
            indicator.classList.add('chevron-std');

        }else{

            indicator.classList.remove('chevron-std');
            indicator.classList.add('chevron-flipped');

        }
    }
}

