$(document).ready(function () {
  $('#dtBasic').DataTable({
  	"ordering": false,
  	"pagingType": "simple",
  	"paging": false, // enable pagination
  	// "lengthMenu": "All",
	});

  // $('.dataTables_length').addClass('bs-select');

  $('#dtBasic_filter').remove(); // remove filter function
  $('.dataTables_length').remove(); // remove page
});

