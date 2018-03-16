ReadMe.md

## Dependencies
* Desktop Theme
  * https://store.kde.org/p/1084931/
* Widgets
  * https://store.kde.org/p/1160672/
  * https://store.kde.org/p/1166501/
  * https://store.kde.org/p/1166510/
  * https://store.kde.org/p/1100895/
  * https://store.kde.org/p/1152230/
  * https://store.kde.org/p/998901/
  * https://store.kde.org/p/1100894/
* Alt-Tab Skin
  * https://store.kde.org/p/1153173/
* Yakuake
  * https://store.kde.org/p/1165686/


## Look and Feel Docs

* `/home/chris/.local/share/knewstuff3/` will contain a bunch of `.knsregistry` files. This folder is populated when you browse icons/widgets/etc in the Get Hot New Stuff widget. You can convert these filenames to `kns://.knsrc/api.kde-look.org/1165686`, which you can use in the `X-KPackage-Dependencies` in the `metadata.desktop` file.
* The keys for `contents/defaults` can be figured out by reading the source code for the look and feel kcm:
  * https://github.com/KDE/plasma-desktop/blob/master/kcms/lookandfeel/kcm.cpp
* If the `contents/colors` file is found, everything is copied to `~/.config/kdeglobals`.
  * https://github.com/KDE/plasma-desktop/blob/master/kcms/lookandfeel/kcm.cpp#L279
  * https://github.com/KDE/plasma-desktop/blob/master/kcms/lookandfeel/kcm.cpp#L435
