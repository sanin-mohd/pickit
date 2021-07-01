$(document).ready(function () {
  $("#search-input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#data-table tbody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  // admin form validations
  $('#inputForm').validate()

  var path = window.location.href;
  console.log(path)

  // cropping and validating images on uploading banners 

  if (path.includes('add-banner') || path.includes('edit-banner') || path.includes('add-poster') || path.includes('edit-poster') || path.includes('add-category') || path.includes('edit-category')) {
    var imageBox = document.getElementById('image-box')
    var confirmBtn = document.getElementById('confirm-btn')
    var input = document.getElementById('id_image')
    var cropped = document.getElementById('cropped')
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

    input.addEventListener('change', () => {
      if (!allowedExtensions.exec(input.value)) {
        alert('Invalid file type');
        input.value = '';
        cropped.src = '';
        confirmBtn.classList.add('not-visible')
        imageBox.classList.add('not-visible')

      }
      else {

        confirmBtn.classList.remove('not-visible')
        imageBox.classList.remove('not-visible')
        cropped.src = ''

        var img_data = input.files[0]
        var url = URL.createObjectURL(img_data)
        imageBox.innerHTML = `<img src="${url}" id="image" width="500px">`

        var $image = $('#image');

        if (path.includes('add-banner')) {
          aspect_ratio = 21 / 4;
        }
        else if (path.includes('edit-banner')) {
          aspect_ratio = 21 / 4;
        }
        else if (path.includes('add-poster')) {
          aspect_ratio = 12 / 7;
        }
        else if (path.includes('edit-poster')) {
          aspect_ratio = 12 / 7;
        }
        else if (path.includes('add-category')) {
          aspect_ratio = 1 / 1;
        }
        else if (path.includes('edit-category')) {
          aspect_ratio = 1 / 1;
        }

        $image.cropper({
          aspectRatio: aspect_ratio,
          crop: function (event) {
            console.log(event.detail.x);
            console.log(event.detail.y);
            console.log(event.detail.width);
            console.log(event.detail.height);
            console.log(event.detail.rotate);
            console.log(event.detail.scaleX);
            console.log(event.detail.scaleY);
          }
        });

        // Get the Cropper.js instance after initialized
        var cropper = $image.data('cropper');

        confirmBtn.addEventListener('click', () => {
          cropper.getCroppedCanvas().toBlob((blob) => {
            let fileInputElement = document.getElementById('id_image');
            let file = new File([blob], img_data.name, { type: "image/*", lastModified: new Date().getTime() });
            let container = new DataTransfer();
            container.items.add(file);
            fileInputElement.files = container.files;

            var reader = new FileReader();
            reader.onload = function (e) {
              cropped.src = e.target.result
            }
            reader.readAsDataURL(input.files[0]);
            confirmBtn.classList.add('not-visible')
            imageBox.classList.add('not-visible')

          })
        })
      }
    })
  }
  else if (path.includes('add-product') || path.includes('edit-product')) {
    // // cropping and validating images on uploading products

    var imageBox = document.getElementById('image-box')
    var confirmBtn = document.getElementById('confirm-btn')
    var input1 = document.getElementById('id_image_1')
    var input2 = document.getElementById('id_image_2')
    var input3 = document.getElementById('id_image_3')
    var input4 = document.getElementById('id_image_4')
    var cropped1 = document.getElementById('cropped1')
    var cropped2 = document.getElementById('cropped2')
    var cropped3 = document.getElementById('cropped3')
    var cropped4 = document.getElementById('cropped4')
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

    input1.addEventListener('change', () => {
      if (!allowedExtensions.exec(input1.value)) {
        alert('Invalid file type');
        input1.value = '';
        cropped1.src = '';
        confirmBtn.classList.add('not-visible')
        imageBox.classList.add('not-visible')

      }
      else {
        confirmBtn.classList.remove('not-visible')
        imageBox.classList.remove('not-visible')
        cropped1.src = ''

        var img_data = input1.files[0]
        var url = URL.createObjectURL(img_data)
        imageBox.innerHTML = `<img src="${url}" id="image" width="500px">`

        var $image = $('#image');

        $image.cropper({
          aspectRatio: 1 / 1,
          crop: function (event) {
            console.log(event.detail.x);
            console.log(event.detail.y);
            console.log(event.detail.width);
            console.log(event.detail.height);
            console.log(event.detail.rotate);
            console.log(event.detail.scaleX);
            console.log(event.detail.scaleY);
          }
        });

        // Get the Cropper.js instance after initialized
        var cropper = $image.data('cropper');

        confirmBtn.addEventListener('click', () => {
          cropper.getCroppedCanvas().toBlob((blob) => {
            let fileInputElement = document.getElementById('id_image_1');
            let file = new File([blob], img_data.name, { type: "image/*", lastModified: new Date().getTime() });
            let container = new DataTransfer();
            container.items.add(file);
            fileInputElement.files = container.files;

            var reader = new FileReader();
            reader.onload = function (e) {
              cropped1.src = e.target.result
            }
            reader.readAsDataURL(input1.files[0]);
            confirmBtn.classList.add('not-visible')
            imageBox.classList.add('not-visible')

          })
        })

        // second image

        input2.addEventListener('change', () => {
          if (!allowedExtensions.exec(input2.value)) {
            alert('Invalid file type');
            input2.value = '';
            cropped2.src = '';
            confirmBtn.classList.add('not-visible')
            imageBox.classList.add('not-visible')

          }
          else {
            confirmBtn.classList.remove('not-visible')
            imageBox.classList.remove('not-visible')
            cropped2.src = ''

            var img_data = input2.files[0]
            var url = URL.createObjectURL(img_data)
            imageBox.innerHTML = `<img src="${url}" id="image" width="500px">`

            var $image = $('#image');

            $image.cropper({
              aspectRatio: 1 / 1,
              crop: function (event) {
                console.log(event.detail.x);
                console.log(event.detail.y);
                console.log(event.detail.width);
                console.log(event.detail.height);
                console.log(event.detail.rotate);
                console.log(event.detail.scaleX);
                console.log(event.detail.scaleY);
              }
            });

            // Get the Cropper.js instance after initialized
            var cropper = $image.data('cropper');

            confirmBtn.addEventListener('click', () => {
              cropper.getCroppedCanvas().toBlob((blob) => {
                let fileInputElement = document.getElementById('id_image_2');
                let file = new File([blob], img_data.name, { type: "image/*", lastModified: new Date().getTime() });
                let container = new DataTransfer();
                container.items.add(file);
                fileInputElement.files = container.files;

                var reader = new FileReader();
                reader.onload = function (e) {
                  cropped2.src = e.target.result
                }
                reader.readAsDataURL(input2.files[0]);
                confirmBtn.classList.add('not-visible')
                imageBox.classList.add('not-visible')

              })
            })
          }
        })
        // third image 


        input3.addEventListener('change', () => {
          if (!allowedExtensions.exec(input3.value)) {
            alert('Invalid file type');
            input3.value = '';
            cropped3.src = '';
            confirmBtn.classList.add('not-visible')
            imageBox.classList.add('not-visible')

          }
          else {
            confirmBtn.classList.remove('not-visible')
            imageBox.classList.remove('not-visible')
            cropped3.src = ''

            var img_data = input3.files[0]
            var url = URL.createObjectURL(img_data)
            imageBox.innerHTML = `<img src="${url}" id="image" width="500px">`

            var $image = $('#image');

            $image.cropper({
              aspectRatio: 1 / 1,
              crop: function (event) {
                console.log(event.detail.x);
                console.log(event.detail.y);
                console.log(event.detail.width);
                console.log(event.detail.height);
                console.log(event.detail.rotate);
                console.log(event.detail.scaleX);
                console.log(event.detail.scaleY);
              }
            });

            // Get the Cropper.js instance after initialized
            var cropper = $image.data('cropper');

            confirmBtn.addEventListener('click', () => {
              cropper.getCroppedCanvas().toBlob((blob) => {
                let fileInputElement = document.getElementById('id_image_3');
                let file = new File([blob], img_data.name, { type: "image/*", lastModified: new Date().getTime() });
                let container = new DataTransfer();
                container.items.add(file);
                fileInputElement.files = container.files;

                var reader = new FileReader();
                reader.onload = function (e) {
                  cropped3.src = e.target.result
                }
                reader.readAsDataURL(input3.files[0]);
                confirmBtn.classList.add('not-visible')
                imageBox.classList.add('not-visible')

              })
            })
          }
        })
        // fourth image

        input4.addEventListener('change', () => {
          if (!allowedExtensions.exec(input4.value)) {
            alert('Invalid file type');
            input4.value = '';
            cropped4.src = '';
            confirmBtn.classList.add('not-visible')
            imageBox.classList.add('not-visible')

          }
          else {
            confirmBtn.classList.remove('not-visible')
            imageBox.classList.remove('not-visible')
            cropped4.src = ''

            var img_data = input4.files[0]
            var url = URL.createObjectURL(img_data)
            imageBox.innerHTML = `<img src="${url}" id="image" width="500px">`

            var $image = $('#image');

            $image.cropper({
              aspectRatio: 1 / 1,
              crop: function (event) {
                console.log(event.detail.x);
                console.log(event.detail.y);
                console.log(event.detail.width);
                console.log(event.detail.height);
                console.log(event.detail.rotate);
                console.log(event.detail.scaleX);
                console.log(event.detail.scaleY);
              }
            });

            // Get the Cropper.js instance after initialized
            var cropper = $image.data('cropper');

            confirmBtn.addEventListener('click', () => {
              cropper.getCroppedCanvas().toBlob((blob) => {
                let fileInputElement = document.getElementById('id_image_4');
                let file = new File([blob], img_data.name, { type: "image/*", lastModified: new Date().getTime() });
                let container = new DataTransfer();
                container.items.add(file);
                fileInputElement.files = container.files;

                var reader = new FileReader();
                reader.onload = function (e) {
                  cropped4.src = e.target.result
                }
                reader.readAsDataURL(input4.files[0]);
                confirmBtn.classList.add('not-visible')
                imageBox.classList.add('not-visible')

              })
            })
          }
        })
      }
    })
  }

});

// change order status

function approve(order_id) {
  dat = { 'order_id': order_id }
  $.ajax({
    url: '/admin/approve/',
    type: 'GET',
    data: dat,
    dataType: 'json',
    success: function (res) {
      document.getElementById(order_id).innerHTML = res.status
      document.getElementById(order_id).classList.remove('text-danger')

    }
  })
}
function dispatch(order_id) {
  dat = { 'order_id': order_id }
  $.ajax({
    url: '/admin/dispatch/',
    type: 'GET',
    data: dat,
    dataType: 'json',
    success: function (res) {
      document.getElementById(order_id).innerHTML = res.status
      document.getElementById(order_id).classList.remove('text-danger')

    }
  })
}
function deliver(order_id) {
  dat = { 'order_id': order_id }
  $.ajax({
    url: '/admin/deliver/',
    type: 'GET',
    data: dat,
    dataType: 'json',
    success: function (res) {
      document.getElementById(order_id).innerHTML = res.status
      document.getElementById(order_id).classList.remove('text-danger')
    }
  })
}
function reject(order_id) {
  dat = { 'order_id': order_id }
  $.ajax({
    url: '/admin/reject/',
    type: 'GET',
    data: dat,
    dataType: 'json',
    success: function (res) {
      document.getElementById(order_id).innerHTML = res.status
      document.getElementById(order_id).classList.add('text-danger')

    }
  })
}

function openUpdateCategoryOffer(cat_offer, cat_id) {
  document.getElementById('catOffer').value = cat_offer
  console.log(cat_offer)
  document.getElementById('catId').value = cat_id
  console.log(cat_id)
}

function updateCategoryOffer() {
  cat_offer = document.getElementById('catOffer').value
  cat_id = document.getElementById('catId').value
  console.log(cat_offer)
  console.log(cat_id)
  dat = {
    'cat_id': cat_id,
    'cat_offer': cat_offer,
  }
  $.ajax({
    url: '/admin/update-category-offer/',
    type: 'GET',
    data: dat,
    dataType: 'json',
    success: function (res) {
      document.getElementById(cat_id).innerHTML = res.cat_offer + '%'
      if (res.cat_offer != 0) {
        document.getElementById(cat_id + cat_id).classList.remove('not-visible')
      }
    }
  })
}

function deleteCategoryOffer(cat_id) {
  dat = {
    'cat_id': cat_id,
  }
  choice = confirm('Are you sure you want to remove this offer?')
  if (choice) {
    $.ajax({
      url: '/admin/delete-category-offer/',
      type: 'GET',
      data: dat,
      dataType: 'json',
      success: function (res) {
        document.getElementById(cat_id).innerHTML = '0%'
        document.getElementById(cat_id + cat_id).classList.add('not-visible')
      }
    })
  }
}