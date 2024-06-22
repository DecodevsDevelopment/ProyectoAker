    function applyFilter() {
            const selectBox = document.getElementById('selectBox');
            const selectedValue = selectBox.value;
            const baseUrl = document.querySelector('.boxFilter').dataset.urlFilter;


            // Agrega el nuevo valor del selectBox
            if (selectedValue) {
                 window.location.href = `${baseUrl}?selectBox=${selectedValue}`;
            }else{
                 window.location.href = baseUrl;
            }

        }
