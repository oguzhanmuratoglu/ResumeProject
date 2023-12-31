let UpdatedMyData = {};
let day =  "16";
let month =  "04";
let year =  "1999";
let workExperienceId =0;
let educationId = 0;
let referenceId = 0;
let socialMediaId=0;
let certificationId=0;
let skillId =0;
let id =1;
let id2 =1;
let id3 =1;
let id4 =1;
let id5 =1;
let id6 =1;
get();


function get(){

    const storedData = localStorage.getItem('MyData');
    if (storedData) {
        let convertedData = JSON.parse(storedData);

        setMyInformation(convertedData.person);
        setMySkills(convertedData.skills);
        setMyWorkExperiences(convertedData.workExperiences);
        setMyEducations(convertedData.educations);
        setMyReferences(convertedData.references);
        setMySocialMedias(convertedData.socialMedias);
        setMyCertifications(convertedData.certifications);
    } else {
        setMyInformation(MyData.person);
        setMySkills(MyData.skills);
        setMyWorkExperiences(MyData.workExperiences);
        setMyEducations(MyData.educations);
        setMyReferences(MyData.references);
        setMySocialMedias(MyData.socialMedias);
        setMyCertifications(MyData.certifications);
    }
        
}




function setMyInformation(person){
    document.getElementById("firstName").value = person.name;
    document.getElementById("lastName").value = person.lastName;
    document.getElementById("title").value = person.title;
    document.getElementById("dateOfBirth").value = `${year}-${month}-${day}`;
    document.getElementById("email").value = person.email;
    document.getElementById("address").value = person.address;
    document.getElementById("phone").value = person.phone;
    document.getElementById("about-me").value = person.aboutMe;

}

// function setAndConvertPhoneNumber(number){  
//     let phoneNumber =Array.from(number);
//     for(let index in phoneNumber){

//         if(index=== 1){
            
//         phoneNumber.splice(index,1)
//         index--;
//         }
//         if(index=== 4){
            
//             phoneNumber.splice(index,1)
//             index--;
//         }
//         if(index=== 8){
            
//             phoneNumber.splice(index,1)
//             index--;
//         }
//     }

//     let stringPhoneNumber = phoneNumber.join();

//     return stringPhoneNumber;
// }

function setMySkills(skills){
    document.getElementById("skill").innerHTML=createSkillHtmlTags(skills);
}

function addSkill(){
    skillId++;
    document.getElementById("skills").innerHTML+=
    `<div id="skill-${skillId}" class="fields experience">
    <div class="input-field">
        <label>Title</label>
        <input id="title-${skillId}" onkeyup="updateResume()"  class="skillss"   type="text" placeholder="Enter your skill title">
    </div>
    <div class="input-field">
        <label>Rate</label>
        <input id="rate-${skillId}" onkeyup="updateResume()" class="skillss"  type="number" placeholder="Enter your skill rate">
    </div>
    <button class="deleteButton" onclick="deleteSkillDetail(${skillId})">Çıkar -</button>
</div>`;
}

function createSkillHtmlTags(skills){
    let text = "";

        for(let skill of skills){
            text+=`<div id="skill-${skill.id}" class="fields experience">
            <div class="input-field">
                <label>Title</label>
                <input id="title-${skill.id}" onkeyup="updateResume()"  class="skillss" value="${skill.title}"  type="text" placeholder="Enter your skill Title">
            </div>
            <div class="input-field">
                <label>Rate</label>
                <input id="rate-${skill.id}" onkeyup="updateResume()" class="skillss" value="${skill.rate}" type="number" placeholder="Enter your skill rate">
            </div>
            <button class="deleteButton" onclick="deleteSkillDetail(${skill.id})">Çıkar -</button>
        </div>`;
        skillId++;
        }
        
        return text;
}

function deleteSkillDetail(id){
    document.getElementById(`skill-${id}`).remove();
    document.getElementById(`sk-${ìd}`).remove();

}

    function setMyWorkExperiences(workExperiences){
        document.getElementById("workExperiences").innerHTML=createWorkExperienceHtmlTags(workExperiences);
    }

    function createWorkExperienceHtmlTags(workExperiences){
        
        let text = "";

        for(let workExperience of workExperiences){
            text+=`<div id="work-experience-${workExperience.id}" class="fields experience">
            <div class="input-field">
                <label>Start Date</label>
                <input id="start-${workExperience.id}" onkeyup="updateResume()"  class="work-experiences" value="${workExperience.startYear}"  type="text" placeholder="Enter your Start Date">
            </div>
            <div class="input-field">
                <label>End Date</label>
                <input id="end-${workExperience.id}" onkeyup="updateResume()" class="work-experiences" value="${workExperience.endYear}" type="text" placeholder="Enter your End Date">
            </div>
            <div class="input-field">
                <label>Company</label>
                <input id="company-${workExperience.id}" onkeyup="updateResume()" class="work-experiences" value="${workExperience.company}" type="text" placeholder="Enter your Company">
            </div>
            <div class="input-field">
                <label>Title</label>
                <input id="title-${workExperience.id}" onkeyup="updateResume()" class="work-experiences" value="${workExperience.title}" type="text" placeholder="Enter your Title">
            </div>
            <div class="input-field">
                <label>Description</label>
                <input id="description-${workExperience.id}" onkeyup="updateResume()" class="work-experiences" value="${workExperience.description}" type="text" placeholder="Enter your Description">
            </div>
            <button class="deleteButton" onclick="deleteExperinceDetail(${workExperience.id})">Çıkar -</button>
        </div>`;
        workExperienceId++;
        }
        
        return text;
    }

    function addworkExperiences(){
        workExperienceId++;
        document.getElementById("addworkExperience").innerHTML +=
        `<div id="work-experience-${workExperienceId}" class="fields experience">
        <div class="input-field">
            <label>Start Date</label>
            <input id="start-${workExperienceId}" onkeyup="updateResume()"  class="work-experiences" type="text" placeholder="Enter your Start Date">
        </div>
        <div class="input-field">
            <label>End Date</label>
            <input id="end-${workExperienceId}" onkeyup="updateResume()" class="work-experiences" type="text" placeholder="Enter your End Date">
        </div>
        <div class="input-field">
            <label>Company</label>
            <input id="company-${workExperienceId}" onkeyup="updateResume()" class="work-experiences" type="text" placeholder="Enter your Company">
        </div>
        <div class="input-field">
            <label>Title</label>
            <input id="title-${workExperienceId}" onkeyup="updateResume()" class="work-experiences" type="text" placeholder="Enter your Title">
        </div>
        <div class="input-field">
            <label>Description</label>
            <input id="description-${workExperienceId}" onkeyup="updateResume()" class="work-experiences" type="text" placeholder="Enter your Description">
        </div>
        <button class="deleteButton" onclick="deleteExperinceDetail(${workExperienceId})">Çıkar -</button>
    </div>`;
    }

    function deleteExperinceDetail(id){
        document.getElementById(`work-experience-${id}`).remove();
        document.getElementById(`work-${id}`).remove();
    }

    function setMyEducations(educations){
        document.getElementById("education").innerHTML = createEducationHtmlTags(educations);
    }

    function createEducationHtmlTags(educations){
        let text = "";

        for(let education of educations){

            text+= ` <div id="education-${education.id}" class="fields experience">
            <div class="input-field">
                <label>School Name</label>
                <input id="schoolName-${education.id}" onkeyup="updateResume()" class="educations" value="${education.schoolName}" type="text" placeholder="Enter your School Name">
            </div>
            <div class="input-field">
                <label>Location</label>
                <input id="location-${education.id}" onkeyup="updateResume()" type="text" class="educations" value="${education.location}" placeholder="Enter your School Location">
            </div>
            <div class="input-field">
                <label>Date</label>
                <input id="date-${education.id}" onkeyup="updateResume()" type="text" class="educations" value="${education.date}" placeholder="Exp:  2017-2022">
            </div>
            <div class="input-field">
                <label>Gap</label>
                <input id="gap-${education.id}" onkeyup="updateResume()" type="text" class="educations" value="${education.gap}" placeholder="Enter your GAP SCORE">
            </div>
            <button class="deleteButton" onclick="deleteEducationDetail(${education.id})">Çıkar -</button>
        </div>`;
        educationId++;
        }
        return text;
    }

    function addEducation(){
        educationId++;
        document.getElementById("educations").innerHTML+=
        ` <div id="education-${educationId}" class="fields experience">
        <div class="input-field">
            <label>School Name</label>
            <input id="schoolName-${educationId}" onkeyup="updateResume()" class="educations" type="text" placeholder="Enter your School Name">
        </div>
        <div class="input-field">
            <label>Location</label>
            <input id="location-${educationId}" onkeyup="updateResume()" type="text" class="educations" placeholder="Enter your School Location">
        </div>
        <div class="input-field">
            <label>Date</label>
            <input id="date-${educationId}" onkeyup="updateResume()" type="text" class="educations" placeholder="Exp:  2017-2022">
        </div>
        <div class="input-field">
            <label>Gap</label>
            <input id="gap-${educationId}" onkeyup="updateResume()" type="text" class="educations" placeholder="Enter your GAP SCORE">
        </div>
        <button class="deleteButton" onclick="deleteEducationDetail(${educationId})">Çıkar -</button>
    </div>`;
    }

    function deleteEducationDetail(ìd){
        document.getElementById(`education-${ìd}`).remove();
        document.getElementById(`ed-${ìd}`).remove();
    }


    function setMyReferences(references){
        document.getElementById("reference").innerHTML = createReferenceHtmlTags(references);
    }
    function createReferenceHtmlTags(references){
        let text ="";

        for(let reference of references){

            text+=`<div id="reference-${reference.id}" class="fields experience">
            <div class="input-field">
                <label>Reference Name</label>
                <input id="referanceName-${reference.id}" onkeyup="updateResume()" class="references"  type="text" value="${reference.referanceName}" placeholder="Enter your reference name">
            </div>
            <div class="input-field">
                <label>Description</label>
                <input id="description-${reference.id}" onkeyup="updateResume()" type="text" class="references" value="${reference.description}"  placeholder="Enter your Reference Description">
            </div>
            <button class="deleteButton" onkeyup="updateResume()" onclick="deleteReferanceDetail(${reference.id})">Çıkar -</button>
        </div>`;
        referenceId++;
        }

        return text;
    }

    function addReference(){
        referenceId++;
        document.getElementById("references").innerHTML+=
        ` <div id="reference-${referenceId}" class="fields experience">
        <div class="input-field">
            <label>Reference Name</label>
            <input id="referanceName-${referenceId}" onkeyup="updateResume()" class="references"  type="text" placeholder="Enter your reference name">
        </div>
        <div class="input-field">
            <label>Description</label>
            <input id="description-${referenceId}" onkeyup="updateResume()" class="references" type="text" placeholder="Enter your Reference Description">
        </div>
        <button class="deleteButton" onclick="deleteReferanceDetail(${referenceId})">Çıkar -</button>
    </div>`;
    }

    function deleteReferanceDetail(ìd){
        document.getElementById(`reference-${ìd}`).remove();
        document.getElementById(`re-${ìd}`).remove();
    }

    function setMySocialMedias(socialMedias){
        document.getElementById("socialMedia").innerHTML = createsocialMediaHtmlTags(socialMedias);
    }

    function createsocialMediaHtmlTags(socialMedias){
        let text="";
        for(let socialMedia of socialMedias){
            text+=`<div id="socialMedia-${socialMedia.id}" class="fields experience">
            <div class="input-field">
                <label>Title</label>
                <input class="social-medias" onkeyup="updateResume()" id="title-${socialMedia.id}" type="text" value="${socialMedia.title}" placeholder="Exp: data-feather='linkedin' linkedin is a title">
            </div>
            <div class="input-field">
                <label>Text</label>
                <input class="social-medias" onkeyup="updateResume()" id="text-${socialMedia.id}" value="${socialMedia.text}" type="text" placeholder="Exp: /MyLinkedIn">
            </div>
            <div class="input-field">
                <label>Link</label>
                <input class="social-medias" onkeyup="updateResume()" id="link-${socialMedia.id}" value="${socialMedia.link}" type="text" placeholder="Enter your socail media link">
            </div>
            <button class="deleteButton" onclick="deleteSocialMediaDetail(${socialMedia.id})">Çıkar -</button>
        </div>`;
            socialMediaId++;
        }
        return text;
    }
    function addSocialMedia(){
        socialMediaId++;
        document.getElementById("socialMedias").innerHTML+=
        `<div id="socialMedia-${socialMediaId}" class="fields experience">
        <div class="input-field">
            <label>Title</label>
            <input class="social-medias" onkeyup="updateResume()" id="title-${socialMediaId}" type="text" placeholder="Exp: data-feather='linkedin' linkedin is a title">
        </div>
        <div class="input-field">
            <label>Text</label>
            <input class="social-medias" onkeyup="updateResume()" id="text-${socialMediaId}" type="text" placeholder="Exp: /MyLinkedIn">
        </div>
        <div class="input-field">
            <label>Link</label>
            <input class="social-medias" onkeyup="updateResume()" id="link-${socialMediaId}" type="text" placeholder="Enter your socail media link">
        </div>
        <button class="deleteButton" onclick="deleteSocialMediaDetail(${socialMediaId})">Çıkar -</button>
    </div>`;
    }
    function deleteSocialMediaDetail(ìd){
        document.getElementById(`socialMedia-${ìd}`).remove();
        document.getElementById(`sm-${ìd}`).remove();
    }

    function setMyCertifications(certifications){
        document.getElementById("certification").innerHTML = createCertificationsHtmlTags(certifications);
    }

    function createCertificationsHtmlTags(certifications){
        let text ="";

        for(let certification of certifications){
            text+=`<div id="certification-${certification.id}" class="fields experience">
            <div class="input-field">
                <label>Title</label>
                <input id="title-${certification.id}" onkeyup="updateResume()" class="certifications" type="text" value="${certification.title}" placeholder="Enter your certification title">
            </div>
            <div class="input-field">
                <label>Description</label>
                <input id="description-${certification.id}" onkeyup="updateResume()" class="certifications" value="${certification.description}" type="text" placeholder="Enter a description">
            </div>
            <button class="deleteButton" onclick="deleteCertificationDetail(${certification.id})">Çıkar -</button>
        </div>`;
            certificationId++;
        }
        return text;
    }

    function addCertification(){
        certificationId++;
        document.getElementById("certifications").innerHTML+= `<div id="certification-${certificationId}" class="fields experience">
        <div class="input-field">
            <label>Title</label>
            <input id="title-${certificationId}" onkeyup="updateResume()" class="certifications" type="text" placeholder="Enter your certification title">
        </div>
        <div class="input-field">
            <label>Description</label>
            <input id="description-${certificationId}" onkeyup="updateResume()" class="certifications" type="text" placeholder="Enter a description">
        </div>
        <button class="deleteButton" onclick="deleteCertificationDetail(${certificationId})">Çıkar -</button>
    </div>`;
    }

    function deleteCertificationDetail(ìd){
        document.getElementById(`certification-${ìd}`).remove();
        document.getElementById(`ce-${ìd}`).remove();
    }

    function confirmed(){
        const confirmed2 = confirm("Değişiklikleri kaydetmek istediğinize emin misiniz?");
        if(confirmed2){
            updateAllResumeDetails();
        }
    }

    function updateAllResumeDetails(){
        const workExperiencesCheck = updateWorkExperiencesCheck();
        const skillsCheck = updateSkillsCheck();
        const personalDetailsCheck = updatePersonalDetailsCheck();
        const certificationsCheck = updateCertificationsCheck();
        const educationsCheck = updateEducationsCheck();
        const socialMediasCheck = updateSocialMediasCheck();
        const referencesCheck = updateReferencesCheck();


        if(!workExperiencesCheck || !skillsCheck || !personalDetailsCheck || !certificationsCheck || !educationsCheck || !socialMediasCheck || !referencesCheck)
        {
            alert("Tüm alanları doldurmalısınız!");
            return;
        }

        updateAllDetails();
    }
    function checkInputValue(){

    }
    function updatePersonalDetailsCheck(){
        const personalDetails = document.querySelectorAll(".personal-details");
        for(let personalDetail of personalDetails){
            if(!personalDetail.value){
                return false;
            }
        }
        return true;
    }
    function updateWorkExperiencesCheck(){
        const workExperiences = document.querySelectorAll(".work-experiences");
        for(let workExperience of workExperiences){
            if(!workExperience.value){
                return false;
            }
        }
        return true;
    }
    function updateSkillsCheck(){
        const skills = document.querySelectorAll(".skillss");
        for(let skill of skills){
            if(!skill.value){
                return false;
            }
        }
        return true;
    }

    function updateEducationsCheck(){
        const educations = document.querySelectorAll(".educations");
        for(let education of educations){
            if(!education.value){
                return false;
            }
        }
        return true;
    };

    function updateSocialMediasCheck(){
        const socialMedias = document.querySelectorAll(".social-medias");
        for(let socialMedia of socialMedias){
            if(!socialMedia.value){
                return false;
            }
        }
        return true;
    }

    function updateCertificationsCheck(){
    
        const certifications = document.querySelectorAll(".certifications");
        for(let certification of certifications){
            if(!certification.value){
                return false;
            }
        }
        return true;
    }


    function updateReferencesCheck(){
    
        const references = document.querySelectorAll(".references");
        for(let reference of references){
            if(!reference.value){
                return false;
            }
        }
        return true;
    }

    function updateAllDetails(){
            const person = {
              id : 1,
              name: document.getElementById("firstName").value,
              lastName: document.getElementById("lastName").value,
              title: document.getElementById("title").value,
              dateOfBirth: document.getElementById("dateOfBirth").value,
              email: document.getElementById("email").value,
              address: document.getElementById("address").value,
              phone: document.getElementById("phone").value,
              aboutMe: document.getElementById("about-me").value,
            };

            const gettedSocialMedias = document.querySelectorAll(".social-medias");
            let check12 = false;
            let check13 = false;
            let check14 = false;
            const socialMedias = [];
            
            for(let gettedSocialMedia of gettedSocialMedias){
                id4= +removeTextBeforeHyphen(gettedSocialMedia.id);
                if(gettedSocialMedia.id === `title-${id4}`)
                {
                    title = gettedSocialMedia.value.toString();
                    check12 = true;
                }
                if(gettedSocialMedia.id === `text-${id4}`)
                {
                    text = gettedSocialMedia.value.toString();
                    check13 = true;
                }
                if(gettedSocialMedia.id === `link-${id4}`)
                {
                    link = gettedSocialMedia.value.toString();
                    check14 = true;
                }
                
                if(check12&&check13&&check14){
                    socialMedias.push({id:id4, title, text, link});
                check12 =false;
                check13 =false;
                check14 =false;
                }
            }

            const gettedSkills = document.querySelectorAll(".skillss");
            let check17 = false;
            let check18 = false;
            const skills = [];
            for(let gettedSkill of gettedSkills){
                id6= +removeTextBeforeHyphen(gettedSkill.id);
                if(gettedSkill.id === `title-${id6}`)
                {
                    title = gettedSkill.value.toString();
                    check17 = true;
                }
                if(gettedSkill.id === `rate-${id6}`)
                {
                    rate = gettedSkill.value.toString();
                    check18 = true;
                }
                if(check17&&check18){
                skills.push({id:id6, title, rate});
                check17 =false;
                check18 =false;
                }
            }

            const gettedExperiences = document.querySelectorAll(".work-experiences");
            let check1 = false;
            let check2 = false;
            let check3 = false;
            let check4 = false;
            let check5 = false;
            const workExperiences = [];
            for(let gettedExperience of gettedExperiences){
                id= +removeTextBeforeHyphen(gettedExperience.id);
                if(gettedExperience.id === `start-${id}`)
                {
                    startYear = gettedExperience.value.toString();
                    check1 = true;
                }
                if(gettedExperience.id === `end-${id}`)
                {
                    endYear = gettedExperience.value.toString();
                    check2 = true;
                }
                if(gettedExperience.id === `company-${id}`)
                {
                    company = gettedExperience.value.toString();
                    check3 = true;
                }
                if(gettedExperience.id === `title-${id}`)
                {
                    title = gettedExperience.value.toString();
                    check4 = true;
                }
                if(gettedExperience.id === `description-${id}`)
                {
                    description = gettedExperience.value.toString();
                    check5 = true;
                }
                if(check1&&check2&&check3&&check4&&check5){
                workExperiences.push({id, startYear, endYear, company, title, description});
                check1 =false;
                check2 =false;
                check3 =false;
                check4 =false;
                check5 =false;
                }
            }
            
            const gettedEducations = document.querySelectorAll(".educations");
            let check6 = false;
            let check7 = false;
            let check8 = false;
            let check9 = false;
            let location = "";
            const educations = [];
            
            for(let gettedEducation of gettedEducations){
                id2= +removeTextBeforeHyphen(gettedEducation.id);
                if(gettedEducation.id === `schoolName-${id2}`)
                {
                    schoolName = gettedEducation.value.toString();
                    check6 = true;
                }
                if(gettedEducation.id === `location-${id2}`)
                {
                    location = gettedEducation.value.toString();
                    check7 = true;
                }
                if(gettedEducation.id === `date-${id2}`)
                {
                    date = gettedEducation.value.toString();
                    check8 = true;
                }
                if(gettedEducation.id === `gap-${id2}`)
                {
                    gap = gettedEducation.value.toString();
                    check9 = true;
                }
                
                if(check6&&check7&&check8&&check9){
                    educations.push({id:id2, schoolName, location, date, gap});
                check6 =false;
                check7 =false;
                check8 =false;
                check9 =false;
                }
            }

            const gettedReferences = document.querySelectorAll(".references");
            let check10 = false;
            let check11 = false;
            const references = [];
            
            for(let gettedReference of gettedReferences){
                id3= +removeTextBeforeHyphen(gettedReference.id);
                if(gettedReference.id === `referanceName-${id3}`)
                {
                    referanceName = gettedReference.value.toString();
                    check10 = true;
                }
                if(gettedReference.id === `description-${id3}`)
                {
                    description = gettedReference.value.toString();
                    check11 = true;
                }
                
                if(check10&&check11){
                    references.push({id:id3, referanceName, description});
                check10 =false;
                check11 =false;
                }
            }
            
            const gettedCertifications = document.querySelectorAll(".certifications");
            let check15 = false;
            let check16 = false;
            const certifications = [];
            
            for(let gettedCertification of gettedCertifications){
                
                id5= +removeTextBeforeHyphen(gettedCertification.id);
                if(gettedCertification.id === `title-${id5}`)
                {
                    title = gettedCertification.value.toString();
                    check15 = true;
                }
                if(gettedCertification.id === `description-${id5}`)
                {
                    description = gettedCertification.value.toString();
                    check16 = true;
                }
                
                if(check15&&check16){
                    certifications.push({id:id5, title, description});
                    check15 =false;
                    check16 =false;
                }
            }
            UpdatedMyData = {
                person: person,
                skills : skills,
                socialMedias: socialMedias,
                workExperiences : workExperiences,
                educations : educations,
                references : references,
                certifications : certifications
            }


     
        //    axios.post("http://localhost:5000/api/set", UpdatedMyData)
        //     .then((response) => {
        //       alert("Bilgiler başarıyla güncellendi!");
        //     })
        //     .catch((error) => {
        //       alert("Güncelleme sırasında bir hata oluştu: " + error.message);
        //     });

        localStorage.setItem('MyData', JSON.stringify(UpdatedMyData));

        alert("Bilgiler başarıyla güncellendi!");    
}

function removeTextBeforeHyphen(inputString) {
    if (!inputString.includes("-")) {
        return inputString;
    }

    const parts = inputString.split("-");
    
    const result = parts.slice(1).join("-");
    
    return result;
}

const resumeDisplay = document.getElementById('resume-display');


function updateResume(){


    const indexName = document.getElementById("indexName");
    const indexLastName = document.getElementById("indexLastName");
    const indexTitle = document.getElementById("indexTitle");
    const indexAboutMe = document.getElementById("indexAboutMe");
    const indexDateOfBirth = document.getElementById("indexDateOfBirth");
    const indexPhone = document.getElementById("indexPhone");
    const indexLocation = document.getElementById("indexLocation");
    const indexEmail = document.getElementById("indexEmail");

    const editDisplay = document.getElementById('edit-form');
    const inputFieldsPd = document.querySelectorAll(".personal-details");

    

    const valuesPd = Array.from(inputFieldsPd).map(input => input.value);

    indexName.innerText = valuesPd[0];
    indexLastName.innerText = valuesPd[1];
    indexTitle.innerText = valuesPd[2];
    indexDateOfBirth.innerText = setAndConvertDate(valuesPd[3]);
    indexEmail.innerText = valuesPd[4];
    indexLocation.innerText = valuesPd[5];
    indexPhone.innerText = valuesPd[6];
    indexAboutMe.innerHTML = valuesPd[7];

    const gettedExperiences = document.querySelectorAll(".work-experiences");
            let check1 = false;
            let check2 = false;
            let check3 = false;
            let check4 = false;
            let check5 = false;
            const workExperiences = [];
            for(let gettedExperience of gettedExperiences){
                id= +removeTextBeforeHyphen(gettedExperience.id);
                if(gettedExperience.id === `start-${id}`)
                {
                    startYear = gettedExperience.value.toString();
                    check1 = true;
                }
                if(gettedExperience.id === `end-${id}`)
                {
                    endYear = gettedExperience.value.toString();
                    check2 = true;
                }
                if(gettedExperience.id === `company-${id}`)
                {
                    company = gettedExperience.value.toString();
                    check3 = true;
                }
                if(gettedExperience.id === `title-${id}`)
                {
                    title = gettedExperience.value.toString();
                    check4 = true;
                }
                if(gettedExperience.id === `description-${id}`)
                {
                    description = gettedExperience.value.toString();
                    check5 = true;
                }
                if(check1&&check2&&check3&&check4&&check5){
                workExperiences.push({id, startYear, endYear, company, title, description});
                check1 =false;
                check2 =false;
                check3 =false;
                check4 =false;
                check5 =false;
                }
            }

            document.getElementById("indexWorkExperiences").innerHTML = createworkExperienceHtmlTagsForResumeDisplay(workExperiences);

            const gettedSocialMedias = document.querySelectorAll(".social-medias");
            let check12 = false;
            let check13 = false;
            let check14 = false;
            const socialMedias = [];
            
            for(let gettedSocialMedia of gettedSocialMedias){
                id4= +removeTextBeforeHyphen(gettedSocialMedia.id);
                if(gettedSocialMedia.id === `title-${id4}`)
                {
                    title = gettedSocialMedia.value.toString();
                    check12 = true;
                }
                if(gettedSocialMedia.id === `text-${id4}`)
                {
                    text = gettedSocialMedia.value.toString();
                    check13 = true;
                }
                if(gettedSocialMedia.id === `link-${id4}`)
                {
                    link = gettedSocialMedia.value.toString();
                    check14 = true;
                }
                
                if(check12&&check13&&check14){
                    socialMedias.push({id:id4, title, text, link});
                check12 =false;
                check13 =false;
                check14 =false;
                }
            }

            document.getElementById("indexSocialMedias").innerHTML = createSocialMediaHtmlTagsForResumeDisplay(socialMedias);

            const gettedCertifications = document.querySelectorAll(".certifications");
            let check15 = false;
            let check16 = false;
            const certifications = [];
            
            for(let gettedCertification of gettedCertifications){
                
                id5= +removeTextBeforeHyphen(gettedCertification.id);
                if(gettedCertification.id === `title-${id5}`)
                {
                    title = gettedCertification.value.toString();
                    check15 = true;
                }
                if(gettedCertification.id === `description-${id5}`)
                {
                    description = gettedCertification.value.toString();
                    check16 = true;
                }
                
                if(check15&&check16){
                    certifications.push({id:id5, title, description});
                    check15 =false;
                    check16 =false;
                }
            }
            document.getElementById("indexCertifications").innerHTML = createCertificationHtmlTagsForResumeDisplay(certifications);


            const gettedReferences = document.querySelectorAll(".references");
            let check10 = false;
            let check11 = false;
            const references = [];
            
            for(let gettedReference of gettedReferences){
                id3= +removeTextBeforeHyphen(gettedReference.id);
                if(gettedReference.id === `referanceName-${id3}`)
                {
                    referanceName = gettedReference.value.toString();
                    check10 = true;
                }
                if(gettedReference.id === `description-${id3}`)
                {
                    description = gettedReference.value.toString();
                    check11 = true;
                }
                
                if(check10&&check11){
                    references.push({id:id3, referanceName, description});
                check10 =false;
                check11 =false;
                }
            }
            
            document.getElementById("indexReferences").innerHTML = createReferenceHtmlTagsForResumeDisplay(references);


            const gettedEducations = document.querySelectorAll(".educations");
            let check6 = false;
            let check7 = false;
            let check8 = false;
            let check9 = false;
            let location = "";
            const educations = [];
            
            for(let gettedEducation of gettedEducations){
                id2= +removeTextBeforeHyphen(gettedEducation.id);
                if(gettedEducation.id === `schoolName-${id2}`)
                {
                    schoolName = gettedEducation.value.toString();
                    check6 = true;
                }
                if(gettedEducation.id === `location-${id2}`)
                {
                    location = gettedEducation.value.toString();
                    check7 = true;
                }
                if(gettedEducation.id === `date-${id2}`)
                {
                    date = gettedEducation.value.toString();
                    check8 = true;
                }
                if(gettedEducation.id === `gap-${id2}`)
                {
                    gap = gettedEducation.value.toString();
                    check9 = true;
                }
                
                if(check6&&check7&&check8&&check9){
                    educations.push({id:id2, schoolName, location, date, gap});
                check6 =false;
                check7 =false;
                check8 =false;
                check9 =false;
                }
            }

            document.getElementById("indexEducations").innerHTML = createEducationHtmlTagsForResumeDisplay(educations);

            const gettedSkills = document.querySelectorAll(".skillss");
            let check17 = false;
            let check18 = false;
            const skills = [];
            for(let gettedSkill of gettedSkills){
                id6= +removeTextBeforeHyphen(gettedSkill.id);
                if(gettedSkill.id === `title-${id6}`)
                {
                    title = gettedSkill.value.toString();
                    check17 = true;
                }
                if(gettedSkill.id === `rate-${id6}`)
                {
                    rate = gettedSkill.value.toString();
                    check18 = true;
                }
                if(check17&&check18){
                skills.push({id:id6, title, rate});
                check17 =false;
                check18 =false;
                }
            }
            document.getElementById("indexSkills").innerHTML = createSkillHtmlTagsForResumeDisplay(skills);

    resumeDisplay.classList.remove("hidden");
    resumeDisplay.classList.add("resume-display");
    editDisplay.classList.add("edit-form");

}

function createSkillHtmlTagsForResumeDisplay(skills){
    let text ="";
    for(skill of skills){
        text+=`<div class="skill" id="sk-${skill.id}">
        <div class="skill-name">${skill.title}</div>
        <div class="skill-bar">
          <div class="skill-per" per="${skill.rate}%" style="max-width:${skill.rate}%"></div>
        </div>
      </div>`;
    }
    return text;
}

function createEducationHtmlTagsForResumeDisplay(educations){
    let text ="";
    for(let education of educations){

        text += `<div class="edu_item" id="ed-${id}">
        <p class="item_preTitle">${education.date}</p>
        <h4 class="item_title">${education.location}</h4>
        <p class="item_subtitle">
        ${education.schoolName}
        </p>
        <p class="item_title">
        ${education.gap}
        </p>
      </div>`;

    }
    
    return text;
}

function createReferenceHtmlTagsForResumeDisplay(references){
    let text ="";
    for(let reference of references){

        text += `<div class="ref_item" id="re-${reference.id}">
        <h4 class="item_title">${reference.referanceName}</h4>
        <p class="description">${reference.description}</p>
      </div>`;

    }
    
    return text;
}

function createCertificationHtmlTagsForResumeDisplay(certifications){
    let text ="";
    for(let certification of certifications){

        text += `<div class="certification_item" id="ce-${certification.id}">
        <h4 class="item_title">${certification.title}</h4>
        <p class="description">${certification.description}</p>
      </div>`;

    }
    
    return text;
}

function createSocialMediaHtmlTagsForResumeDisplay(socialMedias){

    let text ="";
    for(let socialMedia of socialMedias){
        text +=`<a href="${socialMedia.link}" id="sm-${socialMedia.id}" target="_blank" class="social_item">
        <i data-feather="${socialMedia.title}"></i>
        <span>${socialMedia.text}</span>
      </a>`;
    }

    return text;
}

function createworkExperienceHtmlTagsForResumeDisplay(workExperiences){
    let text ="";
    for(let workExperience of workExperiences){

        text += `<div class="exp_item" id="work-${workExperience.id}">
          <p class="item_preTitle">${workExperience.startYear} - ${workExperience.endYear}</p>
          <h4 class="item_title">${workExperience.company}</h4>
          <p class="item_subtitle">${workExperience.title}</p>
          <p class=" description">${workExperience.description}</p>
        </div>`;
    }
    
    return text;
}

function setAndConvertDate(data){
    const date = new Date(data);   
    day =  date.getDate();
    day = day.toString().length === 1 ? "0" + day.toString() : day;

    month =  date.getMonth() + 1;
    month = month.toString().length === 1 ? "0" + month.toString() : month;

    year =  date.getFullYear();
    const dateString = `${day}/${month}/${year}`
    return dateString;
}

function reload(){
    window.location.reload();
}


// Sayfanın yüksekliğini alın
// const pageHeight = document.body.scrollHeight;

// // Sayfa içindeki dikey kaydırma olaylarını dinleyin
// window.addEventListener('scroll', () => {
//     // Sayfanın şu anki kaydırma pozisyonunu alın
//     const scrollPosition = window.scrollY;
//     // Örneğin, sayfanın yukarı kaydırılmasıyla iframe'i yukarı kaydırabilirsiniz
//     // Burada sayfanın yukarıya kaydırılma ile ilgili bir kontrol sağlayabilirsiniz.
//     // Örnek olarak:
//     if(scrollPosition>250){
//         if (scrollPosition +400 < pageHeight) {
//             resumeDisplay.style.transform = `translateY(${scrollPosition-200}px)`;
//         }
//     }
// });


const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});





