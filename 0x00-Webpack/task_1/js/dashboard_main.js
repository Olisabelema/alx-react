// js/dashboard_main.js
import $ from 'jquery';
import debounce from 'lodash/debounce';

$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="clickButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let clickCount = 0;

  function updateCounter() {
    clickCount++;
    $('#count').text(`${clickCount} clicks on the button`);
  }

  const debouncedUpdateCounter = debounce(updateCounter, 500);

  $('#clickButton').on('click', debouncedUpdateCounter);
});

