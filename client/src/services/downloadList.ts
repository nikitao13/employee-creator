import axios from 'axios';

const downloadList = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/employees');
    const data = response.data;

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `employees_${Date.now()}.json`);
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading employee data:', error);
  }
};

export default downloadList;
