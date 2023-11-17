declare global {
  interface Window {
    // Whether Wujie is present
    __POWERED_BY_WUJIE__?: boolean;
    // Public path for the sub-app
    __WUJIE_PUBLIC_PATH__: string;
    // Native querySelector
    __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__: typeof Document.prototype.querySelector;
    // Native querySelectorAll
    __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__: typeof Document.prototype.querySelectorAll;
    // Native window object
    __WUJIE_RAW_WINDOW__: Window;
    // Sandbox instance of the sub-app
    __WUJIE: WuJie;
    // Mount function of the sub-app
    __WUJIE_MOUNT: () => void;
    // Unmount function of the sub-app
    __WUJIE_UNMOUNT: () => void;
    // Injected object
    $wujie: {
      bus: EventBus;
      shadowRoot?: ShadowRoot;
      props?: { [key: string]: any };
      location?: Object;
    };
  }
}

export { };
