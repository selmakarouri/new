 






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

async function fillDropdowns() {
  await fillDropdown('Location', 'Rabat', 4);  // Assuming 'Rabat' corresponds to index 4
  await fillDropdown('VisaType', 'National', 1); // Assuming 'National' corresponds to index 1
  await fillDropdown('VisaSubType', 'Language/selectivity', 1); // Assuming 'Language/selectivity' corresponds to index 1
  await fillDropdown('AppointmentCategoryId', 'Normal', 1); // Assuming 'Normal' corresponds to index 1
}

async function fillDropdown(dropdownType, selectText, selectIndex) {
  for (let i = 1; i < 10; i++) {
    const dropdown = document.querySelector(`[aria-owns="${dropdownType}${i}_listbox"]`);
    if (dropdown && dropdown.offsetParent !== null) {
      console.log(`${dropdownType} ${i} is visible`);
      const kendoDropdown = $(`#${dropdownType}${i}`).data("kendoDropDownList");
      if (kendoDropdown) {
        kendoDropdown.select(selectIndex);
        kendoDropdown.trigger("change");
        await new Promise(resolve => setTimeout(resolve, 100)); // Add a delay
      }
    }
  }
}

function createButton(text, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.onclick = onClick;
  return button;
}

// Function to handle captcha and form submission
(async function handleCaptchaAndSubmit() {
  let OnVerifyCaptcha;
  let onAjaxSuccess;

  setTimeout(() => {
    let interval = setInterval(() => {
      if (typeof OnVerifyCaptcha !== "undefined" && typeof b !== "undefined" && typeof d !== "undefined") {
        window.OnVerifyCaptcha = OnVerifyCaptcha;
        $("#dpModal").modal("hide");
        window.onDpAccept = OnVerifyCaptcha;
        window.onDpReject = onAjaxSuccess;
        clearInterval(interval);
      }
    }, 100);

    let submitInterval = setInterval(() => {
      const btnSubmit = $("#btnSubmit");
      if (btnSubmit.is(":visible")) {
        btnSubmit.click();
        clearInterval(submitInterval);
      }
    }, 100);
  }, 120);
})();

    //-------------------//


})();
    console.log("تم تنفيذ الشيفرة لزر Rabat Language/selectivity Normal بنجاح!");
  });
const RabatLPremiumButton = createButton(" Rabat Language/selectivity  Premium", function() {
(function () {
    "use strict";
  (async function() {
    'use strict';

    var vtvUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vtv";
    var thirdUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vt";

    if (window.location.href.startsWith(vtvUrlPrefix)) {
        const btnVerify = document.querySelector("#btnVerify");
        if (btnVerify) {
            btnVerify.click();
        }
    }

    let isOkButtonClicked = false;

    async function RemplirLocation() {
        var locationElement;
        var isVisibleLocation;
        for (var i = 1; i < 10; i++) {
            locationElement = document.querySelector(
                '[aria-owns="Location' + i + '_listbox"]'
            );
            if (locationElement !== null) {
                isVisibleLocation = locationElement.offsetParent !== null;

                if (isVisibleLocation) {
                    console.log("Location " + i + " is visible");
                    var Location = $("#Location" + i).data("kendoDropDownList");
                    Location.select(4); //4 corresponds to 'Rabat'
                    Location.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaType() {
        var VisaTypeElement;
        var isVisibleVisa;
        for (var i = 1; i < 10; i++) {
            VisaTypeElement = document.querySelector(
                '[aria-owns="VisaType' + i + '_listbox"]'
            );
            if (VisaTypeElement !== null) {
                isVisibleVisa = VisaTypeElement.offsetParent !== null;

                if (isVisibleVisa) {
                    console.log("VisaType " + i + " is visible");
                    var VisaType = $("#VisaType" + i).data("kendoDropDownList");
                    VisaType.select(1); // 1 corresponds to 'National'
                    VisaType.trigger("change");

                    await new Promise(resolve => {
                        setTimeout(resolve, 100);
                    });

                    // Click the 'Ok' button in the modal
                    $('button[data-bs-dismiss="modal"]').click();

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaSubType() {
        var VisaSubTypeElement;
        var isVisibleSubVisa;
        for (var i = 1; i < 10; i++) {
            VisaSubTypeElement = document.querySelector(
                '[aria-owns="VisaSubType' + i + '_listbox"]'
            );
            if (VisaSubTypeElement !== null) {
                isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;

                if (isVisibleSubVisa && isOkButtonClicked) {
                    console.log("VisaSubType " + i + " is visible");
                    var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
                     VisaSubType.select(1); // 1 corresponds to 'Language/selectivity'
                    VisaSubType.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirCategoryId() {
        var AppointmentCategoryIdElement;
        var isVisible;
        for (var i = 1; i < 10; i++) {
            AppointmentCategoryIdElement = document.querySelector(
                '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
            );
            if (AppointmentCategoryIdElement !== null) {
                isVisible = AppointmentCategoryIdElement.offsetParent !== null;

                if (isVisible) {
                    console.log("Appointment " + i + " is visible");
                    var AppCategoryId = $("#AppointmentCategoryId" + i).data(
                        "kendoDropDownList"
                    );
                    AppCategoryId.select(2); // 2 corresponds to 'Premium'
                    AppCategoryId.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    function handleOkButtonClick() {
        isOkButtonClicked = true;

        RemplirVisaSubType();
    }

    $('button[data-bs-dismiss="modal"]').on("click", handleOkButtonClick);

    await RemplirLocation();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirVisaType();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirCategoryId();

    //--------------------//
    var OnVerifyCaptcha;
    var onAjaxSuccess;

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
    }, 120);

})();

    //-------------------//

})();
    console.log("تم تنفيذ الشيفرة لزر Rabat Language/selectivity بنجاح!");
  });
    
  const RabatNNormalButton = createButton("Rabat Students - Non-tertiary studies  Normal", function() {
(function () {
    "use strict";

     (async function() {
    'use strict';

    var vtvUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vtv";
    var thirdUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vt";

    if (window.location.href.startsWith(vtvUrlPrefix)) {
        const btnVerify = document.querySelector("#btnVerify");
        if (btnVerify) {
            btnVerify.click();
        }
    }

    let isOkButtonClicked = false;

    async function RemplirLocation() {
        var locationElement;
        var isVisibleLocation;
        for (var i = 1; i < 10; i++) {
            locationElement = document.querySelector(
                '[aria-owns="Location' + i + '_listbox"]'
            );
            if (locationElement !== null) {
                isVisibleLocation = locationElement.offsetParent !== null;

                if (isVisibleLocation) {
                    console.log("Location " + i + " is visible");
                    var Location = $("#Location" + i).data("kendoDropDownList");
                    Location.select(4); //4 corresponds to 'Rabat'
                    Location.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaType() {
        var VisaTypeElement;
        var isVisibleVisa;
        for (var i = 1; i < 10; i++) {
            VisaTypeElement = document.querySelector(
                '[aria-owns="VisaType' + i + '_listbox"]'
            );
            if (VisaTypeElement !== null) {
                isVisibleVisa = VisaTypeElement.offsetParent !== null;

                if (isVisibleVisa) {
                    console.log("VisaType " + i + " is visible");
                    var VisaType = $("#VisaType" + i).data("kendoDropDownList");
                    VisaType.select(1); // 1 corresponds to 'National '
                    VisaType.trigger("change");

                    await new Promise(resolve => {
                        setTimeout(resolve, 100);
                    });

                    // Click the 'Ok' button in the modal
                    $('button[data-bs-dismiss="modal"]').click();

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaSubType() {
        var VisaSubTypeElement;
        var isVisibleSubVisa;
        for (var i = 1; i < 10; i++) {
            VisaSubTypeElement = document.querySelector(
                '[aria-owns="VisaSubType' + i + '_listbox"]'
            );
            if (VisaSubTypeElement !== null) {
                isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;

                if (isVisibleSubVisa && isOkButtonClicked) {
                    console.log("VisaSubType " + i + " is visible");
                    var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
                     VisaSubType.select(2); //2 corresponds to ' Non-tertiary studies '
                    VisaSubType.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirCategoryId() {
        var AppointmentCategoryIdElement;
        var isVisible;
        for (var i = 1; i < 10; i++) {
            AppointmentCategoryIdElement = document.querySelector(
                '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
            );
            if (AppointmentCategoryIdElement !== null) {
                isVisible = AppointmentCategoryIdElement.offsetParent !== null;

                if (isVisible) {
                    console.log("Appointment " + i + " is visible");
                    var AppCategoryId = $("#AppointmentCategoryId" + i).data(
                        "kendoDropDownList"
                    );
                    AppCategoryId.select(1); // 1 corresponds to 'Normal'
                    AppCategoryId.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    function handleOkButtonClick() {
        isOkButtonClicked = true;

        RemplirVisaSubType();
    }

    $('button[data-bs-dismiss="modal"]').on("click", handleOkButtonClick);

    await RemplirLocation();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirVisaType();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirCategoryId();

    //--------------------//
    var OnVerifyCaptcha;
    var onAjaxSuccess;

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
    }, 120);

})();
    //-------------------//

})();
    console.log("تم تنفيذ الشيفرة لزر Rabat Students - Non-tertiary studies   Normal بنجاح!");
  });
  const RabatNPremiumButton = createButton("RabatStudents - Non-tertiary studies  Premium", function() {
(function () {
    "use strict";

       (async function() {
    'use strict';

    var vtvUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vtv";
    var thirdUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vt";

    if (window.location.href.startsWith(vtvUrlPrefix)) {
        const btnVerify = document.querySelector("#btnVerify");
        if (btnVerify) {
            btnVerify.click();
        }
    }

    let isOkButtonClicked = false;

    async function RemplirLocation() {
        var locationElement;
        var isVisibleLocation;
        for (var i = 1; i < 10; i++) {
            locationElement = document.querySelector(
                '[aria-owns="Location' + i + '_listbox"]'
            );
            if (locationElement !== null) {
                isVisibleLocation = locationElement.offsetParent !== null;

                if (isVisibleLocation) {
                    console.log("Location " + i + " is visible");
                    var Location = $("#Location" + i).data("kendoDropDownList");
                    Location.select(4); //4 corresponds to 'Rabat'
                    Location.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaType() {
        var VisaTypeElement;
        var isVisibleVisa;
        for (var i = 1; i < 10; i++) {
            VisaTypeElement = document.querySelector(
                '[aria-owns="VisaType' + i + '_listbox"]'
            );
            if (VisaTypeElement !== null) {
                isVisibleVisa = VisaTypeElement.offsetParent !== null;

                if (isVisibleVisa) {
                    console.log("VisaType " + i + " is visible");
                    var VisaType = $("#VisaType" + i).data("kendoDropDownList");
                    VisaType.select(1); // 1 corresponds to 'National '
                    VisaType.trigger("change");

                    await new Promise(resolve => {
                        setTimeout(resolve, 100);
                    });

                    // Click the 'Ok' button in the modal
                    $('button[data-bs-dismiss="modal"]').click();

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaSubType() {
        var VisaSubTypeElement;
        var isVisibleSubVisa;
        for (var i = 1; i < 10; i++) {
            VisaSubTypeElement = document.querySelector(
                '[aria-owns="VisaSubType' + i + '_listbox"]'
            );
            if (VisaSubTypeElement !== null) {
                isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;

                if (isVisibleSubVisa && isOkButtonClicked) {
                    console.log("VisaSubType " + i + " is visible");
                    var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
                     VisaSubType.select(2); // 2 corresponds to 'family reunification visa '
                    VisaSubType.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirCategoryId() {
        var AppointmentCategoryIdElement;
        var isVisible;
        for (var i = 1; i < 10; i++) {
            AppointmentCategoryIdElement = document.querySelector(
                '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
            );
            if (AppointmentCategoryIdElement !== null) {
                isVisible = AppointmentCategoryIdElement.offsetParent !== null;

                if (isVisible) {
                    console.log("Appointment " + i + " is visible");
                    var AppCategoryId = $("#AppointmentCategoryId" + i).data(
                        "kendoDropDownList"
                    );
                    AppCategoryId.select(2); // 2 corresponds to 'Premium'
                    AppCategoryId.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    function handleOkButtonClick() {
        isOkButtonClicked = true;

        RemplirVisaSubType();
    }

    $('button[data-bs-dismiss="modal"]').on("click", handleOkButtonClick);

    await RemplirLocation();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirVisaType();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirCategoryId();

    //--------------------//
    var OnVerifyCaptcha;
    var onAjaxSuccess;

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
    }, 120);

})();
    //-------------------//

})();
    console.log("تم تنفيذ الشيفرة لزر Rabat Students - Non-tertiary studies  Premium بنجاح!");
  });

  const RabatGNormalButton = createButton("Rabat Students - Graduate studies  Normal", function() {
(function () {
    "use strict";

     (async function() {
    'use strict';

    var vtvUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vtv";
    var thirdUrlPrefix = "https://morocco.blsportugal.com/MAR/bls/vt";

    if (window.location.href.startsWith(vtvUrlPrefix)) {
        const btnVerify = document.querySelector("#btnVerify");
        if (btnVerify) {
            btnVerify.click();
        }
    }

    let isOkButtonClicked = false;

    async function RemplirLocation() {
        var locationElement;
        var isVisibleLocation;
        for (var i = 1; i < 10; i++) {
            locationElement = document.querySelector(
                '[aria-owns="Location' + i + '_listbox"]'
            );
            if (locationElement !== null) {
                isVisibleLocation = locationElement.offsetParent !== null;

                if (isVisibleLocation) {
                    console.log("Location " + i + " is visible");
                    var Location = $("#Location" + i).data("kendoDropDownList");
                    Location.select(4); //4 corresponds to 'Rabat'
                    Location.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaType() {
        var VisaTypeElement;
        var isVisibleVisa;
        for (var i = 1; i < 10; i++) {
            VisaTypeElement = document.querySelector(
                '[aria-owns="VisaType' + i + '_listbox"]'
            );
            if (VisaTypeElement !== null) {
                isVisibleVisa = VisaTypeElement.offsetParent !== null;

                if (isVisibleVisa) {
                    console.log("VisaType " + i + " is visible");
                    var VisaType = $("#VisaType" + i).data("kendoDropDownList");
                    VisaType.select(1); // 1 corresponds to 'National'
                    VisaType.trigger("change");

                    await new Promise(resolve => {
                        setTimeout(resolve, 100);
                    });

                    // Click the 'Ok' button in the modal
                    $('button[data-bs-dismiss="modal"]').click();

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaSubType() {
        var VisaSubTypeElement;
        var isVisibleSubVisa;
        for (var i = 1; i < 10; i++) {
            VisaSubTypeElement = document.querySelector(
                '[aria-owns="VisaSubType' + i + '_listbox"]'
            );
            if (VisaSubTypeElement !== null) {
                isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;

                if (isVisibleSubVisa && isOkButtonClicked) {
                    console.log("VisaSubType " + i + " is visible");
                    var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
                     VisaSubType.select(3); // 3 corresponds to ' Students - Graduate studies'
                    VisaSubType.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirCategoryId() {
        var AppointmentCategoryIdElement;
        var isVisible;
        for (var i = 1; i < 10; i++) {
            AppointmentCategoryIdElement = document.querySelector(
                '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
            );
            if (AppointmentCategoryIdElement !== null) {
                isVisible = AppointmentCategoryIdElement.offsetParent !== null;

                if (isVisible) {
                    console.log("Appointment " + i + " is visible");
                    var AppCategoryId = $("#AppointmentCategoryId" + i).data(
                        "kendoDropDownList"
                    );
                    AppCategoryId.select(1); // 1 corresponds to 'Normal'
                    AppCategoryId.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    function handleOkButtonClick() {
        isOkButtonClicked = true;

        RemplirVisaSubType();
    }

    $('button[data-bs-dismiss="modal"]').on("click", handleOkButtonClick);

    await RemplirLocation();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirVisaType();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirCategoryId();

    //--------------------//
    var OnVerifyCaptcha;
    var onAjaxSuccess;

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
    }, 120);

})();

    //-------------------//

})();
    console.log("تم تنفيذ الشيفرة لزر  Rabat Students - Graduate studies Normal بنجاح!");
  });

  const RabatGPremiumButton = createButton("Rabat Students - Graduate studies Premium", function() {
(function () {
    "use strict";

   (async function() {
    'use strict';

  
    var thirdUrlPrefix = "blsspainmorocco.net/MAR/Appointment/VisaType";

    if (window.location.href.startsWith(vtvUrlPrefix)) {
        const btnVerify = document.querySelector("#btnVerify");
        if (btnVerify) {
            btnVerify.click();
        }
    }

    let isOkButtonClicked = false;

    async function RemplirLocation() {
        var locationElement;
        var isVisibleLocation;
        for (var i = 1; i < 10; i++) {
            locationElement = document.querySelector(
                '[aria-owns="Location' + i + '_listbox"]'
            );
            if (locationElement !== null) {
                isVisibleLocation = locationElement.offsetParent !== null;

                if (isVisibleLocation) {
                    console.log("Location " + i + " is visible");
                    var Location = $("#Location" + i).data("kendoDropDownList");
                    Location.select(4); //4 corresponds to 'Rabat'
                    Location.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaType() {
        var VisaTypeElement;
        var isVisibleVisa;
        for (var i = 1; i < 10; i++) {
            VisaTypeElement = document.querySelector(
                '[aria-owns="VisaType' + i + '_listbox"]'
            );
            if (VisaTypeElement !== null) {
                isVisibleVisa = VisaTypeElement.offsetParent !== null;

                if (isVisibleVisa) {
                    console.log("VisaType " + i + " is visible");
                    var VisaType = $("#VisaType" + i).data("kendoDropDownList");
                    VisaType.select(1); // 1 corresponds to 'National'
                    VisaType.trigger("change");

                    await new Promise(resolve => {
                        setTimeout(resolve, 100);
                    });

                    // Click the 'Ok' button in the modal
                    $('button[data-bs-dismiss="modal"]').click();

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirVisaSubType() {
        var VisaSubTypeElement;
        var isVisibleSubVisa;
        for (var i = 1; i < 10; i++) {
            VisaSubTypeElement = document.querySelector(
                '[aria-owns="VisaSubType' + i + '_listbox"]'
            );
            if (VisaSubTypeElement !== null) {
                isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;

                if (isVisibleSubVisa && isOkButtonClicked) {
                    console.log("VisaSubType " + i + " is visible");
                    var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
                     VisaSubType.select(3); // 3 corresponds to ' Students - Graduate studies'
                    VisaSubType.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("VisaType " + i + " is not visible");
                }
            }
        }
    }

    async function RemplirCategoryId() {
        var AppointmentCategoryIdElement;
        var isVisible;
        for (var i = 1; i < 10; i++) {
            AppointmentCategoryIdElement = document.querySelector(
                '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
            );
            if (AppointmentCategoryIdElement !== null) {
                isVisible = AppointmentCategoryIdElement.offsetParent !== null;

                if (isVisible) {
                    console.log("Appointment " + i + " is visible");
                    var AppCategoryId = $("#AppointmentCategoryId" + i).data(
                        "kendoDropDownList"
                    );
                    AppCategoryId.select(2); // 2 corresponds to 'Premium'
                    AppCategoryId.trigger("change");

                    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
                } else {
                    // console.log("Element " + i + " is not visible");
                }
            }
        }
    }

    function handleOkButtonClick() {
        isOkButtonClicked = true;

        RemplirVisaSubType();
    }

    $('button[data-bs-dismiss="modal"]').on("click", handleOkButtonClick);

    await RemplirLocation();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirVisaType();
    await new Promise(resolve => setTimeout(resolve, 100)); // Ajouter un délai de 100 ms
    await RemplirCategoryId();

    //--------------------//
    var OnVerifyCaptcha;
    var onAjaxSuccess;

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
    }, 120);
// Wait for the modal to be fully shown
$(document).ready(function() {
    // Function to handle the modal shown event
    $('#commonModal').on('shown.bs.modal', function () {
        // Find the Ok button and trigger a click event
        $('#commonModal .btn-primary').click();
    });
});

})();

    //-------------------//

})();
      console.log("تم تنفيذ الشيفرة لزر  Rabat Students - Graduate studies Premium بنجاح!");
  });

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
  row1.appendChild(RabatNNormalButton);
  row1.appendChild(RabatGNormalButton);
    
  const row2 = document.createElement('div');
  row2.style.display = 'flex';
  row2.appendChild(RabatLPremiumButton);
  row2.appendChild(RabatNPremiumButton);
  row2.appendChild(RabatGPremiumButton); 

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
