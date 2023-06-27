export default function handleMenu(): void {    
    if (typeof window !== 'undefined') {
      const selectElement = document.getElementById('menu_select');
      if (selectElement) {
        selectElement.addEventListener('change', (event) => {
          const selectedValue = (event.target as HTMLSelectElement).value;
          console.log('selectedValue', selectedValue);
          const selectedLink0 = document.querySelector(`#menu_list li a[data-target="${selectedValue}"]`);
          console.log('selectedLink0', selectedLink0);
          const selectedLink = document.querySelector(`#menu_list a[data-target="${selectedValue}"]`) as HTMLAnchorElement;
          console.log('selectedLink', selectedLink);
          if (selectedLink) {
            window.location.href = selectedLink.href;
          }
        });
      }
    }
  }
  