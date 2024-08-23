 






var vtvUrlPrefix = "https://www.blsspainmorocco.net/MAR/Appointment/VisaType";
var thirdUrlPrefix = "https://www.blsspainmorocco.net/MAR/Appointment/VisaType";

document.addEventListener('DOMContentLoaded', async () => {
  if (window.location.href.startsWith(vtvUrlPrefix)) {
    const btnVerify = document.querySelector("#btnVerify");
    if (btnVerify) {
      btnVerify.click();
    }
  } else if (window.location.href.startsWith(thirdUrlPrefix)) {
    // Create and add the Rabat button
    const RabatLNormalButton = createButton("Rabat Language/selectivity Normal", async () => {
      await fillDropdowns();
      const modalCloseButton = document.querySelector('button[data-bs-dismiss="modal"]');
      if (modalCloseButton) {
        modalCloseButton.click();
      }
    });
    document.body.appendChild(RabatLNormalButton);
  }
});


console.log("Starting execution of the script.");

// Variables to store the desired text values for each label
const locationText = "Rabat";
const visaTypeText = "National Visa";
const visaSubTypeText = "Students - Non-tertiary studies";
const appointmentCategoryText = "Normal";

// Function to start the main process
function startProcess() {
    // Get all elements with class .form-label
    const labels = document.querySelectorAll('.form-label');
    console.log(`Found ${labels.length} elements with class .form-label.`);

    // Filter and get the text and ID of only visible labels
    const visibleLabels = Array.from(labels).filter(label => label.offsetParent !== null);
    console.log(`Found ${visibleLabels.length} visible .form-label elements.`);

    const visibleLabelDetails = visibleLabels.map(label => ({
        text: label.textContent.trim(),
        id: label.id || 'No ID'
    }));
    console.log("Extracted text and IDs from visible labels:", visibleLabelDetails);

    // Define the desired order for clicking
    const clickOrder = ['Location', 'Visa Type', 'Visa Sub Type', 'Category'];
    const desiredTexts = [locationText, visaTypeText, visaSubTypeText, appointmentCategoryText];

    // Sort the labels according to the desired order
    const sortedLabels = clickOrder.map(order => visibleLabelDetails.find(label => label.text.includes(order))).filter(Boolean);

    // Function to perform delayed clicking on span and desired li
    function performDelayedActions() {
        sortedLabels.reduce((promiseChain, labelDetail, index) => {
            return promiseChain.then(() => new Promise((resolve) => {
                const delay = Math.random() * 300 + 350; // Random delay between 800ms to 1600ms
                console.log(`Waiting for ${delay} milliseconds before next action.`);
                setTimeout(() => {
                    clickSpanAndDesiredLi(labelDetail, desiredTexts[index]);
                    resolve();
                }, delay);
            }));
        }, Promise.resolve())
        .then(() => {
            // After all actions, click the submit button with delay
            const submitDelay = Math.random() * 300 + 350; // Random delay between 2000ms to 3200ms
            console.log(`Waiting for ${submitDelay} milliseconds before clicking submit button.`);
            setTimeout(clickSubmitButton, submitDelay);
        });
    }

    // Start performing delayed actions
    performDelayedActions();
}

// Function to click the span and the desired li in the corresponding ul
function clickSpanAndDesiredLi(labelDetail, desiredText) {
    if (labelDetail.id !== 'No ID') {
        const listboxId = labelDetail.id.replace('_label', '_listbox');
        const spanElement = document.querySelector(`span[aria-owns="${listboxId}"]`);
        if (spanElement) {
            console.log(`Clicking on span with aria-owns="${listboxId}" for label: ${labelDetail.text}.`);
            spanElement.click();

            // Wait until the ul element is visible
            waitForElementVisible(`#${listboxId}`, () => {
                // Click on the desired li in the ul with the corresponding id
                const ulElement = document.getElementById(listboxId);
                if (ulElement) {
                    const desiredLi = Array.from(ulElement.querySelectorAll('li')).find(li => li.textContent.trim() === desiredText);
                    if (desiredLi) {
                        console.log(`Clicking on li with text "${desiredText}" in ul with id="${listboxId}".`);
                        desiredLi.click();
                    } else {
                        console.log(`No li found with text "${desiredText}" in ul with id="${listboxId}".`);
                    }
                } else {
                    console.log(`No ul found with id="${listboxId}".`);
                }
            });
        } else {
            console.log(`No span found with aria-owns="${listboxId}" for label: ${labelDetail.text}.`);
        }
    }
}

// Function to wait until an element becomes visible
function waitForElementVisible(selector, callback) {
    const interval = setInterval(() => {
        const element = document.querySelector(selector);
        if (element && element.offsetParent !== null) {
            clearInterval(interval);
            callback();
        }
    }, 400); // Check every 400ms for visibility
}

// Function to click the submit button with a randomized delay
function clickSubmitButton() {
    const submitButton = document.getElementById('btnSubmit');
    if (submitButton) {
        const delay = Math.random() * 300+ 350; // Random delay between 1600ms to 2200ms
        console.log(`Delaying for ${delay} milliseconds before clicking the submit button with id "btnSubmit".`);
        setTimeout(() => {
            submitButton.click();
            console.log('Clicked the submit button with id "btnSubmit".');

            // Start checking for modal dismiss button visibility after clicking submit
            checkModalDismissButton();
        }, delay);
    } else {
        console.log('No button found with id "btnSubmit".');
    }
}

// Function to continuously check if the modal dismiss button is visible and click it
function checkModalDismissButton() {
    const initialDelay = Math.random() * 300 + 350; // Initial delay between 2000ms to 3000ms
    console.log(`Waiting for ${initialDelay} milliseconds before checking modal dismiss button visibility.`);

    setTimeout(() => {
        const interval = setInterval(() => {
            const dismissButton = document.querySelector('[data-bs-dismiss="modal"]');
            if (dismissButton && dismissButton.offsetParent !== null) {
                clearInterval(interval);
                console.log('Modal dismiss button found and visible. Clicking...');
                dismissButton.click();
            } else {
                console.log('Modal dismiss button not yet visible. Checking again...');
            }
        }, 500); // Check every 500ms
    }, initialDelay);
}

// Start the process
startProcess();

  //-----------------------------------------------------------/

  // إضافة الأزرار إلى العنصر الذي يحتوي على الأزرار
var targetDiv = document.querySelector('.bg-mode.shadow.rounded-3.overflow-hidden.p-3.col-md-4');
var targetSibling = targetDiv.querySelector('h5.pt-3.text-center');

if (targetSibling) {
    // إنشاء العنصر الذي يحتوي على الأزرار
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'bg-mode';

    // إضافة الأزرار إلى العنصر الذي يحتوي على الأزرار
 const row1 = document.createElement('div');
  row1.style.display = 'flex';
  row1.appendChild(RabatLNormalButton);

    
  const row2 = document.createElement('div');
  row2.style.display = 'flex';
  row2.appendChild(RabatLPremiumButton);


  // إضافة الصفوف إلى العنصر الذي يحتوي على الأزرار
  buttonsContainer.appendChild(row1);
  buttonsContainer.appendChild(row2);
    
    // تحديد الشكل المطلوب للأزرار
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.flexDirection = 'column';

    // إدراج العنصر الذي يحتوي على الأزرار بعد العنصر المستهدف
    targetSibling.parentNode.insertBefore(buttonsContainer, targetSibling.nextSibling);
  } else {
    console.error("لم يتم العثور على العنصر المستهدف");
  }
}

// دالة لإنشاء الأزرار
function createButton(label, clickHandler) {
  var button = document.createElement("button");
  button.textContent = label;
  button.style.width = "45%";
  button.style.margin = "8px";
  button.style.cursor = 'pointer';
  button.style.border = '2.5px solid #f09b0a'; // Border color
  button.style.fontSize = '12px';
  button.style.padding = '8px';
  button.style.backgroundColor = '#3498db';
  button.style.color = '#ffffff';
  button.style.borderRadius = '15px';
  button.style.textAlign = 'center';
  button.style.textDecoration = 'none';
  button.style.display = 'inline-block';
  button.style.transition = 'background-color 0.5s';

  // Mouseover effect
  button.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#5fd49d";
    this.style.border = '2.5px solid #2980b9';
  });

  // Mouseout effect
  button.addEventListener("mouseout", function() {
    this.style.backgroundColor = "#3498db";
    this.style.border = '2.5px solid #f09b0a';
  });

  // إضافة مسؤول الحدث على الزر
  button.addEventListener("click", clickHandler);

  return button;
}


//----------------------- click btnSubmit ------------------------------------------------------

(function () {
  "use strict";
  var OnVerifyCaptcha;
  var onAjaxSuccess;

  // تحقق من عنوان URL الحالي وتنفيذ الشيفرة فقط إذا كانت الصفحة المطلوبة
  if (
    window.location.href.startsWith("https://www.blsspainmorocco.net/MAR/account/login") ||
    window.location.href.startsWith("blsspainmorocco.net/MAR/Appointment/VisaType")
  ) {
    // تأخير تنفيذ الشيفرة لمدة 3 ثواني
    setTimeout(function () {
      var f = setInterval(function () {
        if (
          typeof OnVerifyCaptcha !== "undefined" &&
          typeof b !== "undefined" &&
          typeof d !== "undefined"
        ) {
          window.OnVerifyCaptcha = OnVerifyCaptcha;
          $("#dpModal").modal("hide");
          window.onDpAccept = OnVerifyCaptcha;
          window.onDpReject = onAjaxSuccess;
          clearInterval(f);
        }
      }, 100);

      var a = setInterval(function () {
        if ($("#btnSubmit").is(":visible")) {
          $("#btnSubmit").click();
          clearInterval(a);
        }
      }, 100);
    }, 1000); // تأخير لمدة 3 ثواني
 }
})();
// Wait for the modal to be fully shown
$(document).ready(function() {
    // Function to handle the modal shown event
    $('#commonModal').on('shown.bs.modal', function () {
        // Find the Ok button and trigger a click event
        $('#commonModal .btn-primary').click();
    });
});

//--------------------مؤلف----------------------------//

(function() {
    'use strict';



    // إنشاء زر جديد
    var newButton = document.createElement('button');
    newButton.style.borderRadius = '25%'; // تغيير نسبة الانحناء
    newButton.style.backgroundColor = 'blue'; // تغيير لون الخلفية
    newButton.style.color = 'white';
    newButton.style.position = 'fixed';
    newButton.style.top = '10px';
    newButton.style.right = '10px';
    newButton.style.fontSize = '16px';
    newButton.textContent = 'By AUDI';

    // إضافة حدث النقر على الزر الجديد
    newButton.addEventListener('click', function() {
        // توجيه المستخدم إلى الرابط عند النقر
        window.location.href = 'https://t.me/amine1082';
    });





    // إضافة الزر وعنصر التاريخ إلى الصفحة
    document.body.appendChild(newButton);


})();


//------------------playAudioOnPageLoad----------------------------//

function playAudioOnPageLoad() {
    // تحديد الصفحة الحالية
    var currentPage = window.location.href;

    // الرابط الذي يجب فتح الملف الصوتي بعد فتحه
    var audioPage = "https://www.blsspainmorocco.net/MAR/bls/vtv";

    // الرابط المراد فحصه للتأكد من فتح الملف الصوتي
    var targetPage = "https://www.blsspainmorocco.net/MAR/blsappointment/manageappointmen";

    // الرابط المراد استخدامه لتشغيل الملف الصوتي
    var audioFile = "https://audio.jukehost.co.uk/jfXukeu5oU1rVM5jUsZmpPu5ww6ENgE8";

    // فحص إذا كانت الصفحة الحالية هي الصفحة المستهدفة
    if (currentPage.startsWith(targetPage)) {
        // فحص إذا كانت الصفحة السابقة هي الصفحة التي يجب تشغيل الملف الصوتي بعد فتحها
        if (document.referrer.startsWith(audioPage)) {
            // تشغيل الملف الصوتي
            var audio = new Audio(audioFile);
            audio.play();
        }
    }
}

// استدعاء الدالة عند تحميل الصفحة
window.onload = playAudioOnPageLoad;




//------------------APp-------------------------//
$(document).ready(function () {
    var currentPage = window.location.href;

    if (currentPage.startsWith("https://www.blsspainmorocco.net/MAR/blsappointment/manageappointment")) {
        // تشغيل الصوت

        setTimeout(function() {
            OnUserConsentAccept();
        }, 400);

        setTimeout(function() {
            $('.btn-close').click();
            // بعد النقر على الزر، يتم استدعاء الدالة choose بعد فترة زمنية معينة (مثلاً 2000 مللي ثانية)
            setTimeout(function() {
               // choose();
            }, 900);
        }, 1000);
    }
});
