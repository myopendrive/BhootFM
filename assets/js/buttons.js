////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
//      Button Management Instructions                                                        //
//                                                                                            //
//      To add a button:                                                                      //
//      Step 1 : Copy the entire button object (including the curly brackets and comma).      //
//                  Example:    {                                                             //
//                      category: "Category Name",                                            //
//                      label: "Your Button Label Here",                                      //
//                      path: "path/to/file.ext",                                             //
//                      id: "unique_button_id",                                               //
//                      size: "File Size Here"                                                //
//                  },                                                                        //
//      Step 2 : Paste it after the last button object in the buttons array.                  //
//      Step 3 : Change the label, path, id, category, and size according to the new button.  //
//      Step 4 : Ensure all values are unique.                                                //
//      Step 5 : Commit and Push the changes to GitHub.                                       //
//                                                                                            //
//      To remove a button:                                                                   //
//      Step 1 : Locate and delete the button object in the buttons array.                    //
//      Step 2 : Commit and Push the changes to GitHub.                                       //
//                                                                                            //
//      To hide a button:                                                                     //
//      Step 1 : Add 'hidden: true' to the button object.                                     //
//                  Example:    {                                                             //
//                      category: "Hidden Category",                                          //
//                      label: "Hidden Button",                                               //
//                      path: "path/to/file.ext",                                             //
//                      id: "hidden_button_id",                                               //
//                      size: "File Size Here",                                               //
//                      hidden: true                                                          //
//                  },                                                                        //
//      Step 2 : Commit and Push the changes to GitHub.                                       //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////


// Define category order for structured display
const categoryOrder = [
    "2010 August",
    "2010 September",
    "2010 October",
    "2010 November",
    "2010 December",
    "2011 January",
    "2011 February",
    "2011 March",
    "2011 April",
    "2011 May",
    "2011 June",
    "2011 July",
    "2011 August",
    "2011 September",
    "2011 October",
    "2011 November",
    "2011 December",
    "2012 January",
    "2012 February",
    "2012 March",
    "2012 April",
    "2012 May",
    "2012 June",
    "2012 July",
    "2012 August",
    "2012 September",
    "2012 October",
    "2012 November",
    "2012 December",
    "2013 January",
    "2013 February",
    "2013 March",
    "2013 April",
    "2013 May",
    "2013 June",
    "2013 July",
    "2013 August",
    "2013 September",
    "2013 October",
    "2013 November",
    "2013 December",
    "2014 January",
    "2014 February",
    "2014 March",
    "2014 April",
    "2014 May",
    "2014 June",
    "2014 July",
    "2014 August",
    "2014 September",
    "2014 October",
    "2014 November",
    "2014 December",
    "2015 January",
    "2015 February",
    "2015 March",
    "2015 April",
    "2015 May",
    "2015 June",
    "2015 July",
    "2015 August",
    "2015 September",
    "2015 October",
    "2015 November",
    "2015 December",
    "2016 January",
    "2016 February",
    "2016 March",
    "2016 April",
    "2016 May",
    "2016 June",
    "2016 July",
    "2016 August",
    "2016 September",
    "2016 October",
    "2016 November",
    "2016 December",
    "2017 January",
    "2017 February",
    "2017 March",
    "2017 April",
    "2017 May",
    "2017 June",
    "2017 July",
    "2017 August",
    "2017 September",
    "2017 October",
    "2017 November",
    "2017 December",
    "2018 January",
    "2018 February",
    "2018 March",
    "2018 April",
    "2018 May",
    "2018 June",
    "2018 July",
    "2018 August",
    "2018 September",
    "2018 October",
    "2018 November",
    "2018 December",
    "2019 January",
    "2019 February",
    "2019 March",
    "2019 April",
    "2019 May",
    "2019 June",
    "2019 July",
    "2019 August",
    "2019 September",
    "2019 October",
    "2019 November",
    "2019 December",
    "2020 January"
];

// Array of buttons
const buttons = [
    // 2010 Q3 (July - September)
    { category: "2010 August", label: "2010 08 13", path: "2010q3", id: "2010-08-13", size: "9.88" },
    { category: "2010 August", label: "2010 08 20", path: "2010q3", id: "2010-08-20", size: "12.02" },
    { category: "2010 August", label: "2010 08 27", path: "2010q3", id: "2010-08-27", size: "22.96" },

    // { category: "2010 September", label: "2010 09 03", path: "2010q3", id: "2010-09-03", size: "21.6" },
    // { category: "2010 September", label: "2010 09 10", path: "2010q3", id: "2010-09-10", size: "2.82" },
    // { category: "2010 September", label: "2010 09 17", path: "2010q3", id: "2010-09-17", size: "22.7" },
    // { category: "2010 September", label: "2010 09 24", path: "2010q3", id: "2010-09-24", size: "22.3" },

    // 2010 Q4 (October - December)
    // { category: "2010 October", label: "2010 10 01", path: "2010q4", id: "2010-10-01", size: "" },
    // { category: "2010 October", label: "2010 10 08", path: "2010q4", id: "2010-10-08", size: "" },
    // { category: "2010 October", label: "2010 10 15", path: "2010q4", id: "2010-10-15", size: "" },
    // { category: "2010 October", label: "2010 10 22", path: "2010q4", id: "2010-10-22", size: "" },
    // { category: "2010 October", label: "2010 10 29", path: "2010q4", id: "2010-10-29", size: "" },

    // { category: "2010 November", label: "2010 11 05", path: "2010q4", id: "2010-11-05", size: "" },
    // { category: "2010 November", label: "2010 11 12", path: "2010q4", id: "2010-11-12", size: "" },
    // { category: "2010 November", label: "2010 11 19", path: "2010q4", id: "2010-11-19", size: "" },
    // { category: "2010 November", label: "2010 11 26", path: "2010q4", id: "2010-11-26", size: "" },

    // { category: "2010 December", label: "2010 12 03", path: "2010q4", id: "2010-12-03", size: "" },
    // { category: "2010 December", label: "2010 12 10", path: "2010q4", id: "2010-12-10", size: "" },
    // { category: "2010 December", label: "2010 12 17", path: "2010q4", id: "2010-12-17", size: "" },
    // { category: "2010 December", label: "2010 12 24", path: "2010q4", id: "2010-12-24", size: "" },
    // { category: "2010 December", label: "2010 12 31", path: "2010q4", id: "2010-12-31", size: "" },

    // 2011 Q1 (January - March)
    // { category: "2011 January", label: "2011 01 07", path: "2011q1", id: "2011-01-07", size: "" },
    // { category: "2011 January", label: "2011 01 14", path: "2011q1", id: "2011-01-14", size: "" },
    // { category: "2011 January", label: "2011 01 21", path: "2011q1", id: "2011-01-21", size: "" },
    // { category: "2011 January", label: "2011 01 28", path: "2011q1", id: "2011-01-28", size: "" },

    // { category: "2011 February", label: "2011 02 04", path: "2011q1", id: "2011-02-04", size: "" },
    // { category: "2011 February", label: "2011 02 11", path: "2011q1", id: "2011-02-11", size: "" },
    // { category: "2011 February", label: "2011 02 18", path: "2011q1", id: "2011-02-18", size: "" },
    // { category: "2011 February", label: "2011 02 25", path: "2011q1", id: "2011-02-25", size: "" },

    // { category: "2011 March", label: "2011 03 04", path: "2011q1", id: "2011-03-04", size: "" },
    // { category: "2011 March", label: "2011 03 11", path: "2011q1", id: "2011-03-11", size: "" },
    // { category: "2011 March", label: "2011 03 18", path: "2011q1", id: "2011-03-18", size: "" },
    // { category: "2011 March", label: "2011 03 25", path: "2011q1", id: "2011-03-25", size: "" },

    // 2011 Q2 (April - June)
    // { category: "2011 April", label: "2011 04 01", path: "2011q2", id: "2011-04-01", size: "" },
    // { category: "2011 April", label: "2011 04 08", path: "2011q2", id: "2011-04-08", size: "" },
    // { category: "2011 April", label: "2011 04 15", path: "2011q2", id: "2011-04-15", size: "" },
    // { category: "2011 April", label: "2011 04 22", path: "2011q2", id: "2011-04-22", size: "" },
    // { category: "2011 April", label: "2011 04 29", path: "2011q2", id: "2011-04-29", size: "" },

    // { category: "2011 May", label: "2011 05 06", path: "2011q2", id: "2011-05-06", size: "" },
    // { category: "2011 May", label: "2011 05 13", path: "2011q2", id: "2011-05-13", size: "" },
    // { category: "2011 May", label: "2011 05 20", path: "2011q2", id: "2011-05-20", size: "" },
    // { category: "2011 May", label: "2011 05 27", path: "2011q2", id: "2011-05-27", size: "" },

    // { category: "2011 June", label: "2011 06 03", path: "2011q2", id: "2011-06-03", size: "" },
    // { category: "2011 June", label: "2011 06 10", path: "2011q2", id: "2011-06-10", size: "" },
    // { category: "2011 June", label: "2011 06 17", path: "2011q2", id: "2011-06-17", size: "" },
    // { category: "2011 June", label: "2011 06 24", path: "2011q2", id: "2011-06-24", size: "" },

    // 2011 Q3 (July - September)
    // { category: "2011 July", label: "2011 07 01", path: "2011q3", id: "2011-07-01", size: "" },
    // { category: "2011 July", label: "2011 07 08", path: "2011q3", id: "2011-07-08", size: "" },
    // { category: "2011 July", label: "2011 07 15", path: "2011q3", id: "2011-07-15", size: "" },
    // { category: "2011 July", label: "2011 07 22", path: "2011q3", id: "2011-07-22", size: "" },
    // { category: "2011 July", label: "2011 07 29", path: "2011q3", id: "2011-07-29", size: "" },

    // { category: "2011 August", label: "2011 08 05", path: "2011q3", id: "2011-08-05", size: "" },
    // { category: "2011 August", label: "2011 08 12", path: "2011q3", id: "2011-08-12", size: "" },
    // { category: "2011 August", label: "2011 08 19", path: "2011q3", id: "2011-08-19", size: "" },
    // { category: "2011 August", label: "2011 08 26", path: "2011q3", id: "2011-08-26", size: "" },

    // { category: "2011 September", label: "2011 09 02", path: "2011q3", id: "2011-09-02", size: "" },
    // { category: "2011 September", label: "2011 09 09", path: "2011q3", id: "2011-09-09", size: "" },
    // { category: "2011 September", label: "2011 09 16", path: "2011q3", id: "2011-09-16", size: "" },
    // { category: "2011 September", label: "2011 09 23", path: "2011q3", id: "2011-09-23", size: "" },
    // { category: "2011 September", label: "2011 09 30", path: "2011q3", id: "2011-09-30", size: "" },

    // 2011 Q4 (October - December)
    // { category: "2011 October", label: "2011 10 07", path: "2011q4", id: "2011-10-07", size: "" },
    // { category: "2011 October", label: "2011 10 14", path: "2011q4", id: "2011-10-14", size: "" },
    // { category: "2011 October", label: "2011 10 21", path: "2011q4", id: "2011-10-21", size: "" },
    // { category: "2011 October", label: "2011 10 28", path: "2011q4", id: "2011-10-28", size: "" },

    // { category: "2011 November", label: "2011 11 04", path: "2011q4", id: "2011-11-04", size: "" },
    // { category: "2011 November", label: "2011 11 11", path: "2011q4", id: "2011-11-11", size: "" },
    // { category: "2011 November", label: "2011 11 18", path: "2011q4", id: "2011-11-18", size: "" },
    // { category: "2011 November", label: "2011 11 25", path: "2011q4", id: "2011-11-25", size: "" },

    // { category: "2011 December", label: "2011 12 02", path: "2011q4", id: "2011-12-02", size: "" },
    // { category: "2011 December", label: "2011 12 09", path: "2011q4", id: "2011-12-09", size: "" },
    // { category: "2011 December", label: "2011 12 16", path: "2011q4", id: "2011-12-16", size: "" },
    // { category: "2011 December", label: "2011 12 23", path: "2011q4", id: "2011-12-23", size: "" },
    // { category: "2011 December", label: "2011 12 30", path: "2011q4", id: "2011-12-30", size: "" },

    // 2012 Q1 (January - March)
    // { category: "2012 January", label: "2012 01 06", path: "2012q1", id: "2012-01-06", size: "" },
    // { category: "2012 January", label: "2012 01 13", path: "2012q1", id: "2012-01-13", size: "" },
    // { category: "2012 January", label: "2012 01 20", path: "2012q1", id: "2012-01-20", size: "" },
    // { category: "2012 January", label: "2012 01 27", path: "2012q1", id: "2012-01-27", size: "" },

    // { category: "2012 February", label: "2012 02 03", path: "2012q1", id: "2012-02-03", size: "" },
    // { category: "2012 February", label: "2012 02 10", path: "2012q1", id: "2012-02-10", size: "" },
    // { category: "2012 February", label: "2012 02 17", path: "2012q1", id: "2012-02-17", size: "" },
    // { category: "2012 February", label: "2012 02 24", path: "2012q1", id: "2012-02-24", size: "" },

    // { category: "2012 March", label: "2012 03 02", path: "2012q1", id: "2012-03-02", size: "" },
    // { category: "2012 March", label: "2012 03 09", path: "2012q1", id: "2012-03-09", size: "" },
    // { category: "2012 March", label: "2012 03 16", path: "2012q1", id: "2012-03-16", size: "" },
    // { category: "2012 March", label: "2012 03 23", path: "2012q1", id: "2012-03-23", size: "" },
    // { category: "2012 March", label: "2012 03 30", path: "2012q1", id: "2012-03-30", size: "" },

    // // 2012 Q2 (April - June)
    // { category: "2012 April", label: "2012 04 06", path: "2012q2", id: "2012-04-06", size: "" },
    // { category: "2012 April", label: "2012 04 13", path: "2012q2", id: "2012-04-13", size: "" },
    // { category: "2012 April", label: "2012 04 20", path: "2012q2", id: "2012-04-20", size: "" },
    // { category: "2012 April", label: "2012 04 27", path: "2012q2", id: "2012-04-27", size: "" },

    // { category: "2012 May", label: "2012 05 04", path: "2012q2", id: "2012-05-04", size: "" },
    // { category: "2012 May", label: "2012 05 11", path: "2012q2", id: "2012-05-11", size: "" },
    // { category: "2012 May", label: "2012 05 18", path: "2012q2", id: "2012-05-18", size: "" },
    // { category: "2012 May", label: "2012 05 25", path: "2012q2", id: "2012-05-25", size: "" },

    // { category: "2012 June", label: "2012 06 01", path: "2012q2", id: "2012-06-01", size: "" },
    // { category: "2012 June", label: "2012 06 08", path: "2012q2", id: "2012-06-08", size: "" },
    // { category: "2012 June", label: "2012 06 15", path: "2012q2", id: "2012-06-15", size: "" },
    // { category: "2012 June", label: "2012 06 22", path: "2012q2", id: "2012-06-22", size: "" },
    // { category: "2012 June", label: "2012 06 29", path: "2012q2", id: "2012-06-29", size: "" }
];
