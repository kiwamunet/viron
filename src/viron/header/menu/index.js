import './credit/index.tag';
import './entry/index.tag';

export default function() {
  const store = this.riotx.get();
  const generalActions = [
    { label: 'クレジット', id: 'show_credit' },
    { label: 'ヘルプ', id: 'navigate_to_doc' }
  ];
  const endpointActions = [
    { label: '追加', id: 'add_endpoint' },
    { label: 'ホームを保存', id: 'export_endpoints' },
    { label: 'ホームを読み込み', id: 'import_endpoints' },
    { label: '全てのカードを削除', id: 'remove_all_endpoints' }
  ];

  // メニュー項目群。
  this.actions = [];
  switch (this.opts.type) {
  case 'general':
    this.actions = generalActions;
    break;
  case 'endpoint':
    this.actions = endpointActions;
    break;
  default:
    break;
  }

  /**
   * エンドポイント追加用のモーダルを表示します。
   */
  this.showEntryModal = () => {
    store.action('modals.add', 'viron-application-header-menu-entry');
  };

  /**
   * クレジット表示用のモーダルを表示します。
   */
  this.showCreditModal = () => {
    store.action('modals.add', 'viron-application-header-menu-credit');
  };

  /**
   * メニュー項目がクリック/タップされた時の処理。
   * @param {Object} e
   */
  this.handleItemTap = e => {
    const actionId = e.item.action.id;
    switch (actionId) {
    case 'show_credit':
      this.showCreditModal();
      this.close();
      break;
    case 'navigate_to_doc':
      window.open('https://cam-inc.github.io/viron-doc/', '_blank');
      this.close();
      break;
    case 'add_endpoint':
      this.showEntryModal();
      this.close();
      break;
    case 'export_endpoints':
      // TODO:
      this.close();
      break;
    case 'import_endpoints':
      // TODO:
      this.close();
      break;
    case 'remove_all_endpoints':
      // TODO:
      this.close();
      break;
    default:
      this.close();
      break;
    }
  };
}