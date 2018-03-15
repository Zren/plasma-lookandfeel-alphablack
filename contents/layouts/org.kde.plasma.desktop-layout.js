var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/General": {
                    "arrangement": "1",
                    "iconSize": "3",
                    "popups": "false",
                    "pressToMoveHelp": "false",
                    "showToolbox": "false",
                    "sortMode": "-1",
                    "toolTips": "true"
                },
                "/Wallpaper/General": {
                    "Color": "invalid",
                    "FillMode": "2",
                    "SlideInterval": "1",
                    "SlidePaths": "\\0"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Color": "invalid",
                    "FillMode": "1",
                    "SlideInterval": "1"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/General": {
                            "defaultTileColor": "#06ffffff",
                            "fixedPanelIcon": "true",
                            "icon": "applications-other",
                            "menuItemHeight": "26",
                            "searchFieldFollowsTheme": "true",
                        },
                        "/Shortcuts": {
                            "global": "Meta+Space"
                        }
                    },
                    "plugin": "com.github.zren.tiledmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/General": {
                            "groupingStrategy": "0",
                            "launchers": "preferred://browser",
                            "maxStripes": "1",
                            "middleClickAction": "Close",
                            "separateLaunchers": "false",
                            "showOnlyCurrentDesktop": "true",
                            "sortingStrategy": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/General": {
                            "showWindowIcons": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "com.github.zren.todolist"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/Applet": {
                            "mediaControllerLocation": "top",
                            "volumeUpDownSteps": "20"
                        }
                    },
                    "plugin": "org.kde.plasma.volumewin7mixer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/Calendar": {
                            "month_eventbadge_type": "dots",
                            "month_show_border": "false",
                            "month_today_style": "bigNumber"
                        },
                        "/Configuration/General": {
                            "clock_maxheight": "24",
                            "clock_timeformat": "'<font color=\"#888\">'ddd'<>'d'</font>' h:mm'<'AP'>'"
                        }
                    },
                    "plugin": "org.kde.plasma.eventcalendar"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/General": {
                            "click_action": "minimizeall"
                        }
                    },
                    "plugin": "org.kde.plasma.win7showdesktop"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 1.6666666666666667,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
