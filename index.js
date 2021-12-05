// Logon
$(function() {
    $("#greeting").hide();
    $("#content").hide();
    $("#username").on("keydown", function(enter) {
        if (enter.keyCode === 13) {
            var $username = $("#username").val();
            $("#logon").hide();
            $("#greeting").show();
            $("#your-name").text($username + "!");
            function showingContent() {
                $("#greeting").hide("slow");
                $("#content").show(1500);
                $("body").addClass("body-background-color");
            }
            setInterval(showingContent, 5000);
            if ($username === "") {
                $("#greeting").text("Welcome, SoloLearn member!");
            }
            if ($username.length > 20) {
                $("#greeting").css("font-size", "90%");
            }
            if ($username.length > 30) {
                $("#greeting").css("font-size", "70%");
            }
            if ($username.length > 40) {
                $("#greeting").text("Welcome, SoloLearn member!");
                $("#greeting").css("font-size", "120%");
            }
        }
    });
});

// Time
function timeFunction() {
    var timeTaskbar = new Date(),
    hours = timeTaskbar.getHours(),
    minutes = timeTaskbar.getMinutes(),
    seconds = timeTaskbar.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var timeHTML = document.getElementsByClassName("time");
    timeHTML[0].innerHTML = hours + ":" + minutes;
    var exactTimeHTML = document.getElementsByClassName("exact-time");
    exactTimeHTML[0].innerHTML = hours + ":" + minutes + ":" + seconds;
}
setInterval(timeFunction, 1);

// Date
function dateFunction() {
    var dateTaskbar = new Date(),
    date = dateTaskbar.getDate(),
    day = dateTaskbar.getDay(),
    month = dateTaskbar.getMonth(),
    year = dateTaskbar.getFullYear();
    if (date < 10) {
        date = "0" + date;
    }
    if (year < 10) {
        year = "0" + year;
    }
    var monthText = "";

    // If month is...
    if (month === 0) {
        monthText = "01";
    } else if (month == 1) {
        monthText = "02";
    } else if (month == 2) {
        monthText = "03";
    } else if (month == 3) {
        monthText = "04";
    } else if (month == 4) {
        monthText = "05";
    } else if (month == 5) {
        monthText = "06";
    } else if (month == 6) {
        monthText = "07";
    } else if (month == 7) {
        monthText = "08";
    } else if (month == 8) {
        monthText = "09";
    } else if (month == 9) {
        monthText = "10";
    } else if (month == 10) {
        monthText = "11";
    } else if (month == 11) {
        monthText = "12";
    }

    // If day is...
    var dayText = "";
    if (day === 0) {
        dayText = "Sunday";
    } else if (day == 1) {
        dayText = "Monday";
    } else if (day == 2) {
        dayText = "Tuesday";
    } else if (day == 3) {
        dayText = "Wednesday";
    } else if (day == 4) {
        dayText = "Thursday";
    } else if (day == 5) {
        dayText = "Friday";
    } else if (day == 6) {
        dayText = "Saturday";
    }

    var dateHTML = document.getElementsByClassName("date");
    dateHTML[0].innerHTML = date + "." + monthText + "." + year;
    var dayHTML = document.getElementsByClassName("day");
    dayHTML[0].innerHTML = dayText;
}
setInterval(dateFunction, 1);

// Desktop menu
$(function() {
    var $desktopMenu = $("#desktop-menu");
    $desktopMenu.hide();
    $(document).on("contextmenu", function(desktopMenu_show) {
        $desktopMenu.show();
        var mouseX = desktopMenu_show.clientX;
        var mouseY = desktopMenu_show.clientY;
        $desktopMenu.css("left", mouseX);
        $desktopMenu.css("top", mouseY);
        return false;
    });
    $(document).on("click", function(desktopMenu_hide) {
        if (!$(desktopMenu_hide.target).closest("#desktop-menu").length) {
            $desktopMenu.hide(100);
        }
        desktopMenu_hide.stopPropagation();
    });
    $(".desktop-menu-functions").on("click", function() {
        $desktopMenu.hide(100);
    });

    // Zoom
    $("#small-icons").on("click", function() {
        $("#desktop-programs-column").css("zoom", "75%");
        $("#small-icons").text(" •  Small icons");
        $("#medium-icons").text("Medium icons");
        $("#large-icons").text("Large icons");
    });
    $("#medium-icons").on("click", function() {
        $("#desktop-programs-column").css("zoom", "100%");
        $("#small-icons").text("Small icons");
        $("#medium-icons").text(" •  Medium icons");
        $("#large-icons").text("Large icons");
    });
    $("#large-icons").on("click", function() {
        $("#desktop-programs-column").css("zoom", "125%");
        $("#small-icons").text("Small icons");
        $("#medium-icons").text("Medium icons");
        $("#large-icons").text(" •  Large icons");
    });

    // Personalize
    var $personalize = $("#personalize");
    $personalize.hide();
    $("#setup-personalize").on("click", function() {
        $personalize.show();
        $personalize.css("top", "0");
        $personalize.css("left", "0");
    });
    $("#personalize-close-button").on("click", function() {
        $personalize.hide(100);
    });

    // Personalize
    var $personalize = $("#personalize");
    $personalize.hide();
    $("#setup-personalize").on("click", function() {
        $personalize.show();
        $personalize.css("top", "0");
        $personalize.css("left", "0");
    });
    $("#personalize-close-button").on("click", function() {
        $personalize.hide(100);
    });

    // Background colors
    $("#background-lilac").on("click", function() {
        $("body").removeClass("body-background-color");
        $("body").css("background-color", "#df7cf1");
        $(".desktop-programs").hover(
            function() {
                $(this).css("background-color", "#E7A8F5");
            }, function() {
                $(this).css("background-color", "transparent");
            }
        );
        $("#background-lilac").addClass("background-selected");
        $("#background-pink").removeClass("background-selected");
        $("#background-red").removeClass("background-selected");
        $("#background-orange").removeClass("background-selected");
        $("#background-orange-yellow").removeClass("background-selected");
        $("#background-yellow").removeClass("background-selected");
        $("#background-lime").removeClass("background-selected");
        $("#background-green").removeClass("background-selected");
        $("#background-green-cyan").removeClass("background-selected");
        $("#background-cyan").removeClass("background-selected");
        $("#background-blue").removeClass("background-selected");
        $("#background-blue-violet").removeClass("background-selected");
        $("#background-violet").removeClass("background-selected");
        $("#background-grey").removeClass("background-selected");
    });
    $("#background-pink").on("click", function() {
        $("body").removeClass("body-background-color");
        $("body").css("background-color", "#f17ca6");
        $(".desktop-programs").hover(
            function() {
                $(this).css("background-color", "#f5a8c5");
            }, function() {
                $(this).css("background-color", "transparent");
            }
        );
        $("#background-lilac").removeClass("background-selected");
        $("#background-pink").addClass("background-selected");
        $("#background-red").removeClass("background-selected");
        $("#background-orange").removeClass("background-selected");
        $("#background-orange-yellow").removeClass("background-selected");
        $("#background-yellow").removeClass("background-selected");
        $("#background-lime").removeClass("background-selected");
        $("#background-green").removeClass("background-selected");
        $("#background-green-cyan").removeClass("background-selected");
        $("#background-cyan").removeClass("background-selected");
        $("#background-blue").removeClass("background-selected");
        $("#background-blue-violet").removeClass("background-selected");
        $("#background-violet").removeClass("background-selected");
        $("#background-grey").removeClass("background-selected");
    });
    $("#background-red").on("click", function() {
        $("body").removeClass("body-background-color");
        $("body").css("background-color", "#f17c7c");
        $(".desktop-programs").hover(
            function() {
                $(this).css("background-color", "#f5a8a8");
            }, function() {
                $(this).css("background-color", "transparent");
            }
        );
        $("#background-lilac").removeClass("background-selected");
        $("#background-pink").removeClass("background-selected");
        $("#background-red").addClass("background-selected");
        $("#background-orange").removeClass("background-selected");
        $("#background-orange-yellow").removeClass("background-selected");
        $("#background-yellow").removeClass("background-selected");
        $("#background-lime").removeClass("background-selected");
        $("#background-green").removeClass("background-selected");
        $("#background-green-cyan").removeClass("background-selected");
        $("#background-cyan").removeClass("background-selected");
        $("#background-blue").removeClass("background-selected");
        $("#background-blue-violet").removeClass("background-selected");
        $("#background-violet").removeClass("background-selected");
        $("#background-grey").removeClass("background-selected");
    });
    $("#background-orange").on("click", function() {
        $("body").removeClass("body-background-color");
        $("body").css("background-color", "#f1b27c");
        $(".desktop-programs").hover(
            function() {
                $(this).css("background-color", "#f5cca8");
            }, function() {
                $(this).css("background-color", "transparent");
            }
        );
        $("#background-lilac").removeClass("background-selected");
        $("#background-pink").removeClass("background-selected");
        $("#background-red").removeClass("background-selected");
        $("#background-orange").addClass("background-selected");
        $("#background-orange-yellow").removeClass("background-selected");
        $("#background-yellow").removeClass("background-selected");
        $("#background-lime").removeClass("background-selected");
        $("#background-green").removeClass("background-selected");
        $("#background-green-cyan").removeClass("background-selected");
        $("#background-cyan").removeClass("background-selected");
        $("#background-blue").removeClass("background-selected");
        $("#background-blue-violet").removeClass("background-selected");
        $("#background-violet").removeClass("background-selected");
        $("#background-grey").removeClass("background-selected");
    });
    $("#background-orange-yellow").on("click", function() {
        $("body").removeClass("body-background-color");
        $("body").css("background-color", "#f1ca7c");
        $(".desktop-programs").hover(
            function() {
                $(this).css("background-color", "#f5dda8");
            }, function() {
                $(this).css("background-color", "transparent");
            }
        );
        $("#background-lilac").removeClass("background-selected");
        $("#background-pink").removeClass("background-selected");
        $("#background-red").removeClass("background-selected");
        $("#background-orange").removeClass("background-selected");
        $("#background-orange-yellow").addClass("background-selected");
        $("#background-yellow").removeClass("background-selected");
        $("#background-lime").removeClass("background-selected");
        $("#background-green").removeClass("background-selected");
        $("#background-green-cyan").removeClass("background-selected");
        $("#background-cyan").removeClass("background-selected");
        $("#background-blue").removeClass("background-selected");
        $("#background-blue-violet").removeClass("background-selected");
        $("#background-violet").removeClass("background-selected");
        $("#background-grey").removeClass("background-selected");
    });
    $("#background-yellow").on("click", function() {
        $("body").removeClass("body-background-color");
        $("body").css("background-color", "#f1dc7c");
        $(".desktop-programs").hover(
            function() {
                $(this).css("background-color", "#f5e8a8");
            }, function() {
                $(this).css("background-color", "transparent");
            }
        );
        $("#background-lilac").removeClass("background-selected");
        $("#background-pink").removeClass("background-selected");
        $("#background-red").removeClass("background-selected");
        $("#background-orange").removeClass("background-selected");
        $("#background-orange-yellow").removeClass("background-selected");
        $("#background-yellow").addClass("background-selected");
        $("#background-lime").removeClass("background-selected");
        $("#background-green").removeClass("background-selected");
        $("#background-green-cyan").removeClass("background-selected");
        $("#background-cyan").removeClass("background-selected");
        $("#background-blue").removeClass("background-selected");
        $("#background-blue-violet").removeClass("background-selected");
        $("#background-violet").removeClass("background-selected");
        $("#background-grey").removeClass("background-selected");
    });
    $("#background-lime").on("click", function() {
        $("body").removeClass("body-background-color");
        $("body").css("background-color", "#c1f17c");
        $(".desktop-programs").hover(
            function() {
                $(this).css("background-color", "#d5f5a8");
            }, function() {
                $(this).css("background-color", "transparent");
            }
        );
        $("#background-lilac").removeClass("background-selected");
        $("#background-pink").removeClass("background-selected");
        $("#background-red").removeClass("background-selected");
        $("#background-orange").removeClass("background-selected");
        $("#background-orange-yellow").removeClass("background-selected");
        $("#background-yellow").removeClass("background-selected");
        $("#background-lime").addClass("background-selected");
        $("#background-green").removeClass("background-selected");
        $("#background-green-cyan").removeClass("background-selected");
        $("#background-cyan").removeClass("background-selected");
        $("#background-blue").removeClass("background-selected");
        $("#background-blue-violet").removeClass("background-selected");
        $("#background-violet").removeClass("background-selected");
        $("#background-lime").addClass("background-selected");
        $("#background-grey").removeClass("background-selected");
    });
    $("#background-green").on("click", function() {
        $("body").removeClass("body-background-color");
        $("body").css("background-color", "#7cf17d");
        $(".desktop-programs").hover(
            function() {
                $(this).css("background-color", "#a8f5a8");
            }, function() {
                $(this).css("background-color", "transparent");
            }
        );
        $("#background-lilac").removeClass("background-selected");
        $("#background-pink").removeClass("background-selected");
        $("#background-red").removeClass("background-selected");
        $("#background-orange").removeClass("background-selected");
        $("#background-orange-yellow").removeClass("background-selected");
        $("#background-yellow").removeClass("background-selected");
        $("#background-lime").removeClass("background-selected");
        $("#background-green").addClass("background-selected");
        $("#background-green-cyan").removeClass("background-selected");
        $("#background-cyan").removeClass("background-selected");
        $("#background-blue").removeClass("background-selected");
        $("#background-blue-violet").removeClass("background-selected");
        $("#background-violet").removeClass("background-selected");
        $("#background-grey").removeClass("background-selected");
    });
    $("#background-green-cyan").on("click", function() {
        $("body").removeClass("body-background-color");
        $("body").css("background-color", "#7cf1bc");
        $(".desktop-programs").hover(
            function() {
                $(this).css("background-color", "#a8f5d2");
            }, function() {
                $(this).css("background-color", "transparent");
            }
        );
        $("#background-lilac").removeClass("background-selected");
        $("#background-pink").removeClass("background-selected");
        $("#background-red").removeClass("background-selected");
        $("#background-orange").removeClass("background-selected");
        $("#background-orange-yellow").removeClass("background-selected");
        $("#background-yellow").removeClass("background-selected");
        $("#background-lime").removeClass("background-selected");
        $("#background-green").removeClass("background-selected");
        $("#background-green-cyan").addClass("background-selected");
        $("#background-cyan").removeClass("background-selected");
        $("#background-blue").removeClass("background-selected");
        $("#background-blue-violet").removeClass("background-selected");
        $("#background-violet").removeClass("background-selected");
        $("#background-grey").removeClass("background-selected");
    });
    $("#background-cyan").on("click", function() {
        $("body").removeClass("body-background-color");
        $("body").css("background-color", "#7cf1e8");
        $(".desktop-programs").hover(
            function() {
                $(this).css("background-color", "#a8f5ee");
            }, function() {
                $(this).css("background-color", "transparent");
            }
        );
        $("#background-lilac").removeClass("background-selected");
        $("#background-pink").removeClass("background-selected");
        $("#background-red").removeClass("background-selected");
        $("#background-orange").removeClass("background-selected");
        $("#background-orange-yellow").removeClass("background-selected");
        $("#background-yellow").removeClass("background-selected");
        $("#background-lime").removeClass("background-selected");
        $("#background-green").removeClass("background-selected");
        $("#background-green-cyan").removeClass("background-selected");
        $("#background-cyan").addClass("background-selected");
        $("#background-blue").removeClass("background-selected");
        $("#background-blue-violet").removeClass("background-selected");
        $("#background-violet").removeClass("background-selected");
        $("#background-grey").removeClass("background-selected");
    });
    $("#background-blue").on("click", function() {
        $("body").removeClass("body-background-color");
        $("body").css("background-color", "#7cc2f1");
        $(".desktop-programs").hover(
            function() {
                $(this).css("background-color", "#a8d6f5");
            }, function() {
                $(this).css("background-color", "transparent");
            }
        );
        $("#background-lilac").removeClass("background-selected");
        $("#background-pink").removeClass("background-selected");
        $("#background-red").removeClass("background-selected");
        $("#background-orange").removeClass("background-selected");
        $("#background-orange-yellow").removeClass("background-selected");
        $("#background-yellow").removeClass("background-selected");
        $("#background-lime").removeClass("background-selected");
        $("#background-green").removeClass("background-selected");
        $("#background-green-cyan").removeClass("background-selected");
        $("#background-cyan").removeClass("background-selected");
        $("#background-blue").addClass("background-selected");
        $("#background-blue-violet").removeClass("background-selected");
        $("#background-violet").removeClass("background-selected");
        $("#background-grey").removeClass("background-selected");
    });
    $("#background-blue-violet").on("click", function() {
        $("body").removeClass("body-background-color");
        $("body").css("background-color", "#7c84f1");
        $(".desktop-programs").hover(
            function() {
                $(this).css("background-color", "#a8acf5");
            }, function() {
                $(this).css("background-color", "transparent");
            }
        );
        $("#background-lilac").removeClass("background-selected");
        $("#background-pink").removeClass("background-selected");
        $("#background-red").removeClass("background-selected");
        $("#background-orange").removeClass("background-selected");
        $("#background-orange-yellow").removeClass("background-selected");
        $("#background-yellow").removeClass("background-selected");
        $("#background-lime").removeClass("background-selected");
        $("#background-green").removeClass("background-selected");
        $("#background-green-cyan").removeClass("background-selected");
        $("#background-cyan").removeClass("background-selected");
        $("#background-blue").removeClass("background-selected");
        $("#background-blue-violet").addClass("background-selected");
        $("#background-violet").removeClass("background-selected");
        $("#background-grey").removeClass("background-selected");
    });
    $("#background-violet").on("click", function() {
        $("body").removeClass("body-background-color");
        $("body").css("background-color", "#a17cf1");
        $(".desktop-programs").hover(
            function() {
                $(this).css("background-color", "#c1a8f5");
            }, function() {
                $(this).css("background-color", "transparent");
            }
        );
        $("#background-lilac").removeClass("background-selected");
        $("#background-pink").removeClass("background-selected");
        $("#background-red").removeClass("background-selected");
        $("#background-orange").removeClass("background-selected");
        $("#background-orange-yellow").removeClass("background-selected");
        $("#background-yellow").removeClass("background-selected");
        $("#background-lime").removeClass("background-selected");
        $("#background-green").removeClass("background-selected");
        $("#background-green-cyan").removeClass("background-selected");
        $("#background-cyan").removeClass("background-selected");
        $("#background-blue").removeClass("background-selected");
        $("#background-blue-violet").removeClass("background-selected");
        $("#background-violet").addClass("background-selected");
        $("#background-grey").removeClass("background-selected");
    });
    $("#background-grey").on("click", function() {
        $("body").removeClass("body-background-color");
        $("body").css("background-color", "#b8b8b8");
        $(".desktop-programs").hover(
            function() {
                $(this).css("background-color", "#cecece");
            }, function() {
                $(this).css("background-color", "transparent");
            }
        );
        $("#background-lilac").removeClass("background-selected");
        $("#background-pink").removeClass("background-selected");
        $("#background-red").removeClass("background-selected");
        $("#background-orange").removeClass("background-selected");
        $("#background-orange-yellow").removeClass("background-selected");
        $("#background-yellow").removeClass("background-selected");
        $("#background-lime").removeClass("background-selected");
        $("#background-green").removeClass("background-selected");
        $("#background-green-cyan").removeClass("background-selected");
        $("#background-cyan").removeClass("background-selected");
        $("#background-blue").removeClass("background-selected");
        $("#background-blue-violet").removeClass("background-selected");
        $("#background-violet").removeClass("background-selected");
        $("#background-grey").addClass("background-selected");
    });
});

// Menu
$(function() {
    var $menu = $("#menu");
    $menu.hide();
    $("#start-button").on("click", function() {
        $menu.toggle(350);
    });
    $(document).on("click", function(menu) {
        if (!$(menu.target).closest("#start-button").length) {
            $menu.hide(350);
        }
        menu.stopPropagation();
    });

    // About
    var $about = $("#about");
    $about.hide();
    $("#menu-about").on("click", function() {
        $about.show();
        $about.css("top", "0");
        $about.css("left", "0");
        $menu.hide(350);
    })
    $("#about-close-button").on("click", function() {
        $about.hide(100);
    });

    // Calculator
    var $calculator = $("#calculator");
    $calculator.hide();
    $("#menu-calculator").on("click", function() {
        $calculator.show();
        $calculator.css("top", "0");
        $calculator.css("left", "0");
        $menu.hide(350);
    })
    $("#calculator-close-button").on("click", function() {
        $calculator.hide(100);
    });

    // Text editor
    var $textEditor = $("#text-editor");
    $textEditor.hide();
    $("#menu-text-editor").on("click", function() {
        $textEditor.show();
        $textEditor.css("top", "0");
        $textEditor.css("left", "0");
        $menu.hide(350);
    })
    $("#text-editor-close-button").on("click", function() {
        $textEditor.hide(100);
    });
});

// More about datetime
$(function() {
    var $datetimeMore = $("#datetime-more");
    $datetimeMore.hide();
    $("#datetime").on("click", function() {
        $datetimeMore.toggle(350);
    })
    $(document).on("click", function(datetimeMore) {
        if (!$(datetimeMore.target).closest("#datetime").length) {
            $datetimeMore.hide(350);
        }
        datetimeMore.stopPropagation();
    });
});

// Z-index of windows
$(function() {
    var $about = $("#about");
    var $calculator = $("#calculator");
    var $graphicEditor = $("#graphic-editor");
    var $notepad = $("#notepad");
    var $textEditor = $("#text-editor");
    var $personalize = $("#personalize");

    // About
    $about.on("click", function() {
        $about.css("z-index", "100");
        $calculator.css("z-index", "94");
        $textEditor.css("z-index", "97");
        $personalize.css("z-index", "98");
    });

    // Calculator
    $calculator.on("click", function() {
        $about.css("z-index", "94");
        $calculator.css("z-index", "100");
        $textEditor.css("z-index", "97");
        $personalize.css("z-index", "98");
    });



    // Text editor
    $textEditor.on("click", function() {
        $about.css("z-index", "94");
        $calculator.css("z-index", "95");
        $textEditor.css("z-index", "100");
        $personalize.css("z-index", "98");
    });

    // Personalize
    $personalize.on("click", function() {
        $about.css("z-index", "94");
        $calculator.css("z-index", "95");
        $textEditor.css("z-index", "98");
        $personalize.css("z-index", "100");
    });
});

// Calculator
$(function() {
    $("#one-button").on("click", function() {
        display.value += "1";
    });
    $("#two-button").on("click", function() {
        display.value += "2";
    });
    $("#three-button").on("click", function() {
        display.value += "3";
    });
    $("#four-button").on("click", function() {
        display.value += "4";
    });
    $("#five-button").on("click", function() {
        display.value += "5";
    });
    $("#six-button").on("click", function() {
        display.value += "6";
    });
    $("#seven-button").on("click", function() {
        display.value += "7";
    });
    $("#eight-button").on("click", function() {
        display.value += "8";
    });
    $("#nine-button").on("click", function() {
        display.value += "9";
    });
    $("#zero-button").on("click", function() {
        display.value += "0";
    });
    $("#double-zero-button").on("click", function() {
        display.value += "00";
    });
    $("#delete-one-button").on("click", function() {
        display.value = display.value.substring(0, display.value.length - 1);
    });
    $("#dot-button").on("click", function() {
        display.value += ".";
    });
    $("#addition-button").on("click", function() {
        display.value += "+";
    });
    $("#subtraction-button").on("click", function() {
        display.value += "-";
    });
    $("#multiplication-button").on("click", function() {
        display.value += "*";
    });
    $("#division-button").on("click", function() {
        display.value += "/";
    });
    $("#module-button").on("click", function() {
        display.value += "%";
    });
    $("#equal-button").on("click", function() {
        display.value = eval(display.value);
    });
    $("#delete-button").on("click", function() {
        display.value = "";
    });
    $("#pi-button").on("click", function() {
        display.value += "3.141592653589793";
    });
    $("#sqrt-button").on("click", function() {
        display.value = Math.sqrt(display.value);
    });
    $("#left-bracket-button").on("click", function() {
        display.value += "(";
    });
    $("#right-bracket-button").on("click", function() {
        display.value += ")";
    });
});


// Text editor
$(function() {

    // Bold
    $(document).on("click", "#bold-button", function() {
        document.execCommand("bold", false, null);
    });

    // Italic
    $(document).on("click", "#italic-button", function() {
        document.execCommand("italic", false, null);
    });

    // Underline
    $(document).on("click", "#underline-button", function() {
        document.execCommand("underline", false, null);
    });

    // Line through
    $(document).on("click", "#line-through-button", function() {
        document.execCommand("strikethrough", false, null);
        return false;
    });

    // Sup
    $(document).on("click", "#sup-button", function() {
        document.execCommand("superscript", false, null);
        return false;
    });

    // Sub
    $(document).on("click", "#sub-button", function() {
        document.execCommand("subscript", false, null);
        return false;
    });

    // Fonts list
    $(document).on("change", "#fonts-list", function() {
        var font = $(this).val();
        document.execCommand("fontName", false, font);
    });

    // Size
    $(document).on("input", "#text-editor-size", function() {
        var val = $(this).val();
        document.execCommand("styleWithCSS", false, true);
        document.execCommand("fontSize", false, val);
        document.execCommand("styleWithCSS", false, false);
    });

    // Color
    $(document).on("input", "#text-editor-color", function() {
        var val = $(this).val();
        document.execCommand("styleWithCSS", false, true);
        document.execCommand("foreColor", false, val);
        document.execCommand("styleWithCSS", false, false);
    });

    // Background color
    $(document).on("input", "#text-editor-background", function() {
        var val = $(this).val();
        document.execCommand("styleWithCSS", false, true);
        document.execCommand("hiliteColor", false, val);
        document.execCommand("styleWithCSS", false, false);
    });

    // Unordered list
    $(document).on("click", "#unordered-list-button", function() {
        document.execCommand("insertUnorderedList", false, null);
        return false;
    });

    // Ordered list
    $(document).on("click", "#ordered-list-button", function() {
        document.execCommand("insertOrderedList", false, null);
        return false;
    });

    // Undo button
    $(document).on("click", "#undo-button", function() {
        document.execCommand("undo", false, null);
        return false;
    });

    // Redo button
    $(document).on("click", "#redo-button", function() {
        document.execCommand("redo", false, null);
        return false;
    });

    // Align left
    $(document).on("click", "#align-left-button", function() {
        document.execCommand("justifyLeft", false, null);
        return false;
    });

    // Align center
    $(document).on("click", "#align-center-button", function() {
        document.execCommand("justifyCenter", false, null);
        return false;
    });

    // Align right
    $(document).on("click", "#align-right-button", function() {
        document.execCommand("justifyRight", false, null);
        return false;
    });

    // Align justify
    $(document).on("click", "#align-justify-button", function() {
        document.execCommand("justifyFull", false, null);
        return false;
    });
});

// Dragging windows
$(function() {
    $(".draggable").draggabilly({
        containment: "body",
        handle: ".window-menus"
    });
});


const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
