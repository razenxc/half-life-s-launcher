import { Color } from './common/color';
import { Menu } from 'electron';
import { TitlebarOptions } from './interfaces';
export default class Titlebar {
    private titlebar;
    private dragRegion;
    private windowIcon;
    private title;
    private menubarContainer;
    private windowControls;
    private maxRestoreControl;
    private container;
    private isInactive;
    private menubar;
    private options;
    private resizer;
    private defaultOptions;
    private platformIcons;
    constructor(titlebarOptions?: TitlebarOptions);
    private closeMenu;
    private createTitlebar;
    private onBlur;
    private onFocus;
    private onMenubarVisibilityChanged;
    private onMenubarFocusChanged;
    private onDidChangeMaximized;
    private updateStyles;
    /**
     * Update title bar styles based on focus state.
     * @param hasFocus focus state of the window
     */
    onWindowFocus(focus: boolean): void;
    /**
     * Update the full screen state and hide or show the title bar.
     * @param fullscreen Fullscreen state of the window
     */
    onWindowFullScreen(fullscreen: boolean): void;
    /**
     * Update the background color of the title bar
     * @param backgroundColor The color for the background
     */
    updateBackground(backgroundColor: Color): void;
    /**
     * Update the item background color of the menubar
     * @param itemBGColor The color for the item background
     */
    updateItemBGColor(itemBGColor: Color): void;
    /**
     * Update the title of the title bar.
     * You can use this method if change the content of `<title>` tag on your html.
     * @param title The title of the title bar and document.
     */
    updateTitle(title: string): void;
    /**
     * It method set new icon to title-bar-icon of title-bar.
     * @param path path to icon
     */
    updateIcon(path: string): void;
    /**
     * Update the default menu or set a new menu.
     * @param menu The menu.
     */
    updateMenu(menu: Menu): void;
    /**
     * Update the menu from Menu.getApplicationMenu()
     */
    refreshMenu(): Promise<void>;
    /**
     * Update the position of menubar.
     * @param menuPosition The position of the menu `left` or `bottom`.
     */
    updateMenuPosition(menuPosition: "left" | "bottom"): void;
    /**
     * Horizontal alignment of the title.
     * @param side `left`, `center` or `right`.
     */
    updateTitleAlignment(side: "left" | "center" | "right"): void;
    /**
     * Remove the titlebar, menubar and all methods.
     */
    dispose(): void;
}
