import isNull from 'mout/lang/isNull';
import isNumber from 'mout/lang/isNumber';
import isUndefined from 'mout/lang/isUndefined';
import ObjectAssign from 'object-assign';
import '../../components/viron-error/index.tag';

export default function() {
  const store = this.riotx.get();

  this.options = [];

  const config = this.opts.config;
  const path = config.path;
  const field = config.field;
  const query = config.query || {};
  const fetchAutocompleteOptions = val => {
    if (isNull(val) || isUndefined(val)) {
      return;
    }

    Promise
      .resolve()
      .then(() => store.action('oas.getAutocomplete', path, ObjectAssign({}, query, {
        [field]: val
      })))
      .then(options => {
        this.options = options;
        this.update();
      })
      .catch(err => store.action('modals.add', 'viron-error', {
        error: err
      }));
  };

  /**
   * undefined等の値を考慮した最適な値を返します。
   * @param {String|null} value
   * @return {String|null}
   */
  this.normalizeValue = value => {
    if (isNumber(value)) {
      return String(value);
    }
    if (isUndefined(value)) {
      return null;
    }
    return value;
  };

  this.on('mount', () => {
    fetchAutocompleteOptions(this.normalizeValue(this.refs.input.value));
  });

  this.handleFormSubmit = e => {
    e.preventDefault();
    if (!this.opts.onchange) {
      return;
    }
    if (this.opts.isdisabled) {
      return;
    }
    this.opts.onchange(this.normalizeValue(this.opts.val), this.opts.id);
  };

  // `blur`時に`change`イベントが発火する等、`change`イベントでは不都合が多い。
  // そのため、`input`イベントを積極的に使用する。
  this.handleInputInput = e => {
    if (!this.opts.onchange) {
      return;
    }
    if (this.opts.isdisabled) {
      return;
    }
    fetchAutocompleteOptions(this.normalizeValue(e.target.value));
    this.opts.onchange(this.normalizeValue(e.target.value), this.opts.id);
  };

  this.handleInputChange = e => {
    // `blur`時に`change`イベントが発火する。
    // 不都合な挙動なのでイベント伝播を止める。
    e.stopPropagation();
  };
}
