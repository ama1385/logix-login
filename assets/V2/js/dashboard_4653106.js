$(document).ready(function(){

  $('#add-doc').click(function(){
    $('#doc-modal').modal('show');
  })

  $('.modal.fade').addClass('hide').removeClass('fade')
  $('body').addClass('collapse-sidebar')

/*  var degree = 0;*/
  $('.wide-icon').click(function(){
      //degree += 180;
      //$(this).css('transform', `rotate(${degree}deg)`)
      $('body').toggleClass('wide-sidebar');
      $('body').toggleClass('collapse-sidebar');
    })

  //$('#menu-toggle').click(function(){
  //    $('#menu-toggle-icon').toggleClass('fa-xmark').toggleClass('fa-bars');
  //    $('#nav-pills').slideToggle(0);
  //})

    $('#open-sidebar').click(function () {
        $('.side-bar').slideToggle(0);
    });

    $('#close-sidebar').click(function () {
        $('.side-bar').slideToggle(0);
    });

  $('.show-btn').click(function(){
      $(this).parents('.widget-box').find('.shown').toggleClass('hide')
      $(this).parents('.widget-box').find('.hidden').toggleClass('hide')
      $(this).parents('.widget-box').find('.hide-btn').toggleClass('hide')
  })

  $('.hide-btn').click(function(){
      $(this).parents('.widget-box').find('.shown').toggleClass('hide')
      $(this).parents('.widget-box').find('.hidden').toggleClass('hide')
      $(this).toggleClass('hide')
  })

  $('.employees-more').click(function(){
      $('.hidden-inputs').slideToggle().css('display', 'flex');
  })

  $('.new-employee').click(function(){
      $('.hidden-inputs').slideToggle().css('display', 'flex');
  })

  $('#date').click(function(){
      $(this).focus();
  })

  $('.steps .step').click(function(){
      $(this).addClass('active')
      $(this).siblings().removeClass('active')
  })

    $('.multi-forms .next-btn').click(function () {
        $(`.multi-forms .form-title[data-target="step-${$(this).attr('data-step')}"]`).trigger('click')
    })

    $('.multi-forms .prev-btn').click(function () {
        $(`.multi-forms .form-title[data-target="step-${$(this).attr('data-step')}"]`).trigger('click')
    })

  $('.multi-forms .form-title').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    $(`.forms .${$(this).attr('data-target')}`).css('display', 'block')
    $(`.forms .${$(this).attr('data-target')}`).siblings().css('display', 'none')
  })

  $('.sales .multi-forms .form-title').click(function(){
    let color = $(this).css('stopColor')
    $(this).siblings().css('backgroundColor', 'transparent')
    $(this).css('backgroundColor', color)
  })

  $('.sales .multi-forms .form-title.active').click()
  
  
    $('.models-multi-forms .form-title').click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $(`.forms .${$(this).attr('data-target')}`).css('display', 'flex')
        $(`.forms .${$(this).attr('data-target')}`).siblings().css('display', 'none')
    })
  
  $('.models-multi-forms .form-title:first-child').click()

  $('.nav-tabs li').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    $(`.tab-content ${$(this).children('a').attr('href')}`).addClass('active').siblings().removeClass('active')
  })

  $('.widget-header .accordion-button').click(function(){
    $(this).parents('.widget-box').find('.item').toggleClass('shown')
  })

  $('.sales .pay').click(function(){
    $('#salesModal').modal('show');
  })
  

  $('#dark-mode').click(function(){
    if ($(':root').attr('dark') === 'false') {
      localStorage.setItem('dark', 'true');
    }else{
      localStorage.setItem('dark', 'false');
    }

    $(':root').attr('dark', localStorage.getItem('dark'))
  })


  $('.show-pass').click(function(){
    if($(this).parent().children('input').attr('type') == 'password'){
      $(this).parent().children('input').attr('type', 'text')
    }else{
      $(this).parent().children('input').attr('type', 'password')
    }
  })

  $('[data-toggle="dropdown"]').attr('data-bs-toggle', 'dropdown')

  $('[data-toggle="dropdown"]').next('ul').children('li').addClass('dropdown-item')

  $('.widget-box.collapsed .widget-header .widget-toolbar a').click(function(){
    event.preventDefault();
    $(this).parents('.widget-box').find('.widget-body-inner').slideToggle()
  })
})



let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {
          // A string or number determining how long the animation will run.
          duration: 2000,
          // A string indicating which easing function to use for the transition.
          easing: "swing",
          /**
           * A function to be called for each animated property of each animated element. 
           * This function provides an opportunity to
           *  modify the Tween object to change the value of the property before it is set.
           */
          step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };

  if ($(".numbers")[0]){
    let o = 0;
    let p = 0;
    
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (o == 0 && $(window).scrollTop() >= oTop) {
      o++;
      nCount("p.num");
    }
    $(window).scroll(function () {
      // The .offset() method allows us to retrieve the current position of an element  relative to the document
      let oTop = $(".numbers").offset().top - window.innerHeight;
      if (o == 0 && $(window).scrollTop() >= oTop) {
        o++;
        nCount(".num");
      }


      if ($(".numbers-2")[0]){
        let pTop = $(".numbers-2").offset().top - window.innerHeight;
        if (p == 0 && $(window).scrollTop() >= pTop) {
          p++;
          nCount(".num");
        }
      }
    });
  }
  

$(document).ready(function () {
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
    });
});

$(document).on('select2:open', () => {
    document.querySelector('.select2-search__field').focus();
});
  /***********************************************************************/
function openForm(evt, formName) {
    evt.preventDefault();
    // Declare all variables
    var i, tabcontent, tablinks;
    let tabcontent_section = document.querySelector('.tabcontent-section');
    tabcontent_section.classList.add('active')
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(formName).style.display = "block";
    evt.currentTarget.className += " active";
}
function openSubForm(evt, formName) {
    evt.preventDefault();
    // Declare all variables
    var i, tabSubcontent, tabSublinks;
    let tabSubContent_section = document.querySelector('.tabSubcontent-section');
    tabSubContent_section.classList.add('active')
    // Get all elements with class="tabSubcontent" and hide them
    tabSubcontent = document.getElementsByClassName("tabSubcontent");
    for (i = 0; i < tabSubcontent.length; i++) {
        tabSubcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tabSublinks = document.getElementsByClassName("tabSublinks");
    for (i = 0; i < tabSublinks.length; i++) {
        tabSublinks[i].className = tabSublinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(formName).style.display = "block";
    evt.currentTarget.className += " active";
}  
// var ctx = document.getElementById('myChart5').getContext('2d');
// var myChart = new Chart(ctx, {
//   type: 'doughnut',
// data: {
//  datasets: [{
// data:[13,9],
// backgroundColor: '#000',
//  label:'ØªÙØ²ÙØ¹ Ø§ÙÙØ±Ø§Ø±Ø§Øª Ø­Ø³Ø¨ Ø§ÙÙÙØ¹',
// }],
//  labels:['ÙØ±Ø§Ø± ØªØ¹ÙÙÙ','ÙØ±Ø§Ø± Ø§ÙØ§ÙØ©'],
// },
//  options: {
//                  responsive: true,
// 				legend: {
// 					position: 'top',
// 				},
// 				title: {
// 					display: true,
// 					text: 'ØªÙØ²ÙØ¹ Ø§ÙÙØ±Ø§Ø±Ø§Øª Ø­Ø³Ø¨ Ø§ÙÙÙØ¹'
// 				},
// 				animation: {
// 					animateScale: true,
// 					animateRotate: true
// 				}
//              }
//          });

/*ØªØ­ÙÙÙ ÙÙÙØ§Øª Ø¹ÙÙ Ø§ÙØ´ÙÙ Ø§ÙØ£Ø³Ø§Ø³Ù*/
document.addEventListener('DOMContentLoaded', function () {
    const fileInputs = document.querySelectorAll('input[type="file"]:not(.drop-zone-file-input)');
    if (!fileInputs.length) return;

    fileInputs.forEach(input => {
        input.classList.add('d-none', 'file-upload-input');

        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
        const browseText = isRTL ? 'ØªØ­ÙÙÙ' : 'Browse Files';
        const noFileText = isRTL ? 'ÙØ§ ÙÙØ¬Ø¯ Ø£Ø±Ø´ÙÙ' : 'No file chosen';

        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'file-upload-wrapper drop-zone';
        wrapper.setAttribute('role', 'button');
        wrapper.setAttribute('aria-label', isRTL ? 'Ø±ÙØ¹ ÙÙÙ' : 'Upload file');
        wrapper.tabIndex = 0;

        // Create browse button
        const browseButton = document.createElement('button');
        browseButton.type = 'button';
        browseButton.className = 'btn btn-browse';
        browseButton.innerHTML = `<i class="fa-solid fa-cloud-arrow-up"></i> ${browseText}`;

        // Create file name display
        const fileNameDisplay = document.createElement('span');
        fileNameDisplay.className = 'file-name';
        fileNameDisplay.textContent = noFileText;

        // Insert elements
        wrapper.appendChild(browseButton);
        wrapper.appendChild(fileNameDisplay);
        input.parentElement.appendChild(wrapper);
        input.parentElement.classList.add('custom-file-upload');

        // --- Event Listeners ---
        // Click handler
        browseButton.addEventListener('click', () => input.click());
        wrapper.addEventListener('click', (e) => {
            if (e.target === wrapper) input.click();
        });

        // Keyboard accessibility (Enter/Space to trigger file dialog)
        wrapper.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                input.click();
            }
        });

        // File input change handler
        input.addEventListener('change', () => {
            fileNameDisplay.textContent = input.files[0]?.name || noFileText;
        });

        // --- Drag & Drop Functionality ---
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(event => {
            wrapper.addEventListener(event, preventDefaults);
        });

        ['dragenter', 'dragover'].forEach(event => {
            wrapper.addEventListener(event, () => wrapper.classList.add('drop-zone-active'));
        });

        ['dragleave', 'drop'].forEach(event => {
            wrapper.addEventListener(event, () => wrapper.classList.remove('drop-zone-active'));
        });

        wrapper.addEventListener('drop', (e) => {
            const files = e.dataTransfer.files;
            if (files.length) {
                input.files = files;
                fileNameDisplay.textContent = files[0].name;
                // Trigger change event manually (for form validation)
                input.dispatchEvent(new Event('change'));
            }
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
});
/*ØªØ­ÙÙÙ Ø§ÙÙÙÙØ§Øª Start*/
/* ØªØ­ÙÙÙ ÙÙÙØ§Øª Ø¹ÙÙ Ø´ÙÙ drop-zone*/
document.addEventListener('DOMContentLoaded', function () {
    // Get the file input by its rendered ID
    const fileInputs = document.querySelectorAll('input[type="file"].drop-zone-file-input');
    if (!fileInputs) return;

    fileInputs.forEach(input => {
        const isEng = document.documentElement.getAttribute('dir') == "ltr" ? true : false;

        // Create drop zone wrapper
        const dropZoneWrapper = document.createElement('div');
        dropZoneWrapper.className = 'drop-zone-wrapper';
        dropZoneWrapper.style.cssText = `
            order: 2;
            border: 2px dashed #ccc;
            border-radius: 8px;
            padding: 10px;
            text-align: center;
            background-color: #f9f9f9;
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            width: 100%;
        `;

        // Create drop zone content
        const dropZoneContent = document.createElement('div');
        dropZoneContent.className = 'drop-zone-content';

        // Create icon
        const icon = document.createElement('i');
        icon.className = 'fa fa-cloud-upload';
        icon.style.cssText = 'font-size: 32px; color: #666; display: block;';

        // Create text container div
        const textContainer = document.createElement('div');
        textContainer.style.cssText = 'display: flex; align-items: center; justify-content: center; gap: 8px;';

        // Create title
        const title = document.createElement('h5');
        title.style.cssText = 'color: #666; font-size: 14px; margin-bottom: 0;';
        title.textContent = isEng ? 'Drag files here or click to choose files' : 'Ø§Ø³Ø­Ø¨ Ø§ÙÙÙÙØ§Øª ÙÙØ§ Ø£Ù Ø§ÙÙØ± ÙØ§Ø®ØªÙØ§Ø± Ø§ÙÙÙÙØ§Øª';

        // Create subtitle
        const subtitle = document.createElement('p');
        subtitle.style.cssText = 'color: #999; margin-bottom: 0; font-size: 12px;';
        subtitle.textContent = isEng ? 'You can drag one file or multiple files' : 'ÙÙÙÙÙ Ø³Ø­Ø¨ ÙÙÙ ÙØ§Ø­Ø¯ Ø£Ù Ø¹Ø¯Ø© ÙÙÙØ§Øª';

        // Add title and subtitle to text container
        textContainer.appendChild(title);
        textContainer.appendChild(subtitle);

        // Create file list container
        const fileList = document.createElement('div');
        fileList.className = 'file-list';
        fileList.style.cssText = 'display: none; max-height: 150px; overflow-y: auto; align-items: center; gap: 10px;';

        const fileListTitle = document.createElement('h6');
        fileListTitle.style.cssText = 'color: #333; margin-bottom: 0px; font-size: 13px;';
        fileListTitle.textContent = isEng ? 'Selected Files:' : 'Ø§ÙÙÙÙØ§Øª Ø§ÙÙØ®ØªØ§Ø±Ø©:';

        const selectedFiles = document.createElement('div');
        selectedFiles.className = 'selected-files';

        fileList.appendChild(fileListTitle);
        fileList.appendChild(selectedFiles);

        // Assemble drop zone
        dropZoneContent.appendChild(icon);
        dropZoneContent.appendChild(textContainer);
        dropZoneContent.appendChild(fileList);
        dropZoneWrapper.appendChild(dropZoneContent);

        // Hide original input
        input.style.display = 'none';

        // Insert drop zone before the input
        input.parentElement.insertBefore(dropZoneWrapper, input);

        // Add necessary classes
        input.parentElement.classList.add('custom-file-upload');
        input.classList.add('file-upload-input');

        // Event listeners for drag and drop
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropZoneWrapper.addEventListener(eventName, preventDefaults, false);
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            dropZoneWrapper.addEventListener(eventName, highlight, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropZoneWrapper.addEventListener(eventName, unhighlight, false);
        });

        // Handle drop
        dropZoneWrapper.addEventListener('drop', handleDrop, false);

        // Handle click to browse
        dropZoneWrapper.addEventListener('click', () => {
            input.click();
        });

        // Handle file selection
        input.addEventListener('change', handleFiles);

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        function highlight(e) {
            dropZoneWrapper.style.borderColor = '#2196F3';
            dropZoneWrapper.style.backgroundColor = '#E3F2FD';
        }

        function unhighlight(e) {
            dropZoneWrapper.style.borderColor = '#ccc';
            dropZoneWrapper.style.backgroundColor = '#f9f9f9';
        }

        function handleDrop(e) {
            const dt = e.dataTransfer;
            const files = dt.files;
            handleFiles({ target: { files: files } });
        }

        function handleFiles(e) {
            const files = [...e.target.files];

            if (files.length > 0) {
                displaySelectedFiles(files);

                // Update the input files
                const dt = new DataTransfer();
                files.forEach(file => dt.items.add(file));
                input.files = dt.files;
            }
        }

        function displaySelectedFiles(files) {
            selectedFiles.innerHTML = '';
            fileList.style.display = 'flex';

            files.forEach((file, index) => {
                const fileItem = document.createElement('div');
                fileItem.style.cssText = 'display: flex; gap: 10px; justify-content: space-between; align-items: center; padding: 6px; background: white; border-radius: 4px; border: 1px solid #ddd; font-size: 12px;';

                const fileInfo = document.createElement('div');
                fileInfo.innerHTML = `
                    <strong>${file.name}</strong><br>
                    <small style="color: #666;">${formatFileSize(file.size)}</small>
                `;

                const removeBtn = document.createElement('button');
                removeBtn.innerHTML = '<i class="fa fa-times"></i>';
                removeBtn.style.cssText = 'background: #ff4444; color: white; border: none; border-radius: 50%; width: 20px; height: 20px; cursor: pointer; font-size: 10px;';
                removeBtn.type = 'button';
                removeBtn.onclick = (e) => {
                    e.stopPropagation();
                    removeFile(index);
                };

                fileItem.appendChild(fileInfo);
                fileItem.appendChild(removeBtn);
                selectedFiles.appendChild(fileItem);
            });
        }

        function removeFile(index) {
            const dt = new DataTransfer();
            const files = [...input.files];
            files.splice(index, 1);

            files.forEach(file => dt.items.add(file));
            input.files = dt.files;

            if (files.length === 0) {
                fileList.style.display = 'none';
            } else {
                handleFiles({ target: { files: files } });
            }
        }

        function formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }
    });
});

// Add CSS for drag and drop zones
const style = document.createElement('style');
style.textContent = `
    .drop-zone-wrapper:hover {
        border-color: #2196F3 !important;
        background-color: #E3F2FD !important;
    }
    
    .drop-zone-wrapper.dragover {
        border-color: #2196F3 !important;
        background-color: #E3F2FD !important;
        transform: scale(1.02);
    }
    
    .selected-files {
        max-height: 120px;
        overflow-y: auto;
        display: flex;
        gap: 10px;
    }
    
    .custom-file-upload {
        position: relative;
    }
    
    .file-upload-input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }
`;
document.head.appendChild(style);
/*ØªØ­ÙÙÙ Ø§ÙÙÙÙØ§Øª End*/
document.addEventListener("DOMContentLoaded", () => {
    const popupDatepicker = document.querySelectorAll(".popupDatepicker");
    if (popupDatepicker.length > 0) {
        popupDatepicker.forEach((input) => {
            input.setAttribute("autocomplete", "off");
            input.addEventListener("click", () => {
                const calendarsFooter = document.querySelector(".calendars-ctrl")
                if (calendarsFooter) {
                    calendarsFooter.classList.add("purple")
                }
            })
        });
    }

});

function initializeSelect() {
    const excludeSelectors = [
        "#ContentPlaceHolder1_DropSystems",
        "#ContentPlaceHolder1_DropScreens",
        "#ContentPlaceHolder1_DDLLevel_ID",
        "#ContentPlaceHolder1_DDLDegree_ID",
        "#ContentPlaceHolder1_DDLProject_Type",
        "#ContentPlaceHolder1_DDLProject_Type2",
        "#ContentPlaceHolder1_DDLCountry_ID",
        "#ContentPlaceHolder1_DDLCity_ID",
        "#ContentPlaceHolder1_DrpDonjobCat",
        "#ContentPlaceHolder1_DrpDonJob_ID",
        "#ContentPlaceHolder1_FreeTextBox1_9_0",
        "#ContentPlaceHolder1_FreeTextBox1_0_0",
        "#ContentPlaceHolder1_FreeTextBox1_0_1",
        "#ContentPlaceHolder1_FreeTextBox1_0_2",
        "#ContentPlaceHolder1_FreeTextBox1_0_3",
        "#ContentPlaceHolder1_FreeTextBox1_0_5",
        "#ContentPlaceHolder1_FreeTextBox1_4_2",
        "#ContentPlaceHolder1_FreeTextBox1_4_1",
        "#ContentPlaceHolder1_FreeTextBox1_4_0",
        "#ContentPlaceHolder1_DDLVacation_Type_Id",
        "#ContentPlaceHolder1_DDLCat_Type_ID",
        "#ContentPlaceHolder1_DDLZone_ID",
        "#DDlYear",
        "#ContentPlaceHolder1_DDLType_ID",
        "#ContentPlaceHolder1_DDLModel",
        "#ContentPlaceHolder1_DDLCar_Type",
        "#ContentPlaceHolder1_DDLCar_Model",
        "#skin-colorpicker",
    ];

    $('select').each(function () {
        const $select = $(this);
        const isInModal = $select.closest('.modal').length > 0;
        const isExcluded = excludeSelectors.includes('#' + this.id);
        if (!isInModal && !isExcluded) {
            $(this).select2();
        }
    })

    $(".modal select").each(function () {
        new TomSelect(this, {
            create: false,
            dropdownParent: "body",
            persist: false,
            createOnBlur: false,
            create: false,
        })
    });

    //$('#ContentPlaceHolder1_Transaction_DDLUser_ID').select2({
    //    dropdownParent: $('#Add_Assignes')
    //});
    //$('#ContentPlaceHolder1_WFTransaction_DDLUser_ID').select2({
    //    dropdownParent: $('#Add_Assignes')
    //});
}
$(document).ready(function () {
    initializeSelect();
});




// start ============= switch checkbox

const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

checkBoxes.forEach((input) => {
    if (!input.closest('table') && !input.closest('.RadComboBoxDropDown')) {
        const wrapper = document.createElement('label');
        wrapper.className = 'switch purple';

        const parent = input.parentNode;

        parent.insertBefore(wrapper, input);

        wrapper.appendChild(input);
    }

});

// End ============= switch checkbox

