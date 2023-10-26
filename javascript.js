(function () {
       const imageInput = document.getElementById('imageInput');
          const uploadedImage = document.getElementById('uploadedImage');

          imageInput.addEventListener('change', function() {
              const file = imageInput.files[0];
              if (file) {
                  const reader = new FileReader();
                  reader.onload = function(e) {
                      uploadedImage.src = e.target.result;
                  };
                  reader.readAsDataURL(file);
              }
          });

  })();