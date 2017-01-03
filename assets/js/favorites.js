var years = new Array();
years['books'] = [2012, 2013, 2014, 2015, 2016];
years['music'] = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];
years['all'] = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];
years['movies'] = [2016];
years['misc'] = [2013, 2014, 2015, 2016];
var year = 2016;
var list = 'all';

function init() {
    $('.btn-list').click(update_list);
    $('.btn-year').click(update_year);
    $('.btn-img').click(toggle_images);
    // $('.list-img').toggle(); // images hidden by default
    set_default();
    update(list, year);
}

$(document).ready(init);
