// Función para invertir el texto
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Función para manejar el click en el botón de generar
  function handleReverseClick() {
    const inputText = document.getElementById('inputText').value;
    const reversedText = reverseString(inputText);
    const reversedTextArea = document.getElementById('reversedText');
    
    reversedTextArea.value = reversedText;
    
    // Habilitar el botón de copiar si hay texto invertido
    const copyButton = document.getElementById('copyButton');
    if (reversedText) {
        copyButton.disabled = false;
    } else {
        copyButton.disabled = true;
    }
  }
  
  // Función para manejar la copia al portapapeles
  function handleCopyClick() {
    const reversedTextArea = document.getElementById('reversedText');
    reversedTextArea.select();
    document.execCommand('copy');
    
    // Feedback visual tras copiar
    const copyButton = document.getElementById('copyButton');
    copyButton.textContent = '¡Texto copiado!';
    
    setTimeout(() => {
        copyButton.textContent = 'Copiar al portapapeles';
    }, 2000);
  }
  
  // Asignar los eventos a los botones
  document.getElementById('reverseButton').addEventListener('click', handleReverseClick);
  document.getElementById('copyButton').addEventListener('click', handleCopyClick);