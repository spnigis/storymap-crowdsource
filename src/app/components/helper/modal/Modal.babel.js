import $ from 'jquery';
import React from 'react';
import ReactDOM from 'reactDom';
import Helper from 'babel/utils/helper/Helper';
import 'bootstrap/modal';
import 'bootstrap/transition';

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    $(this.node).modal({
      backdrop: this.props.backdrop,
      keyboard: this.props.keyboardClose,
      show: true
    });
  }

  componentWillUnmount() {
    $(this.node).modal('hide');
  }

  render() {

    const modalClasses = Helper.classnames([this.props.className,this.props.classNames,'modal','fade']);
    const verticalHelperClass = Helper.classnames('vertical-alignment-helper',{
      'is-centered': this.props.verticallyCentered
    });

    const createMarkup = function createMarkup(content) {
      return {__html: content};
    };

    const parseContent = function parseContent(contentObj) {
      if (contentObj.html) {
        return <div dangerouslySetInnerHTML={createMarkup(contentObj.content)} />;
      } else if (contentObj.content) {
        return contentObj.content;
      } else {
        return contentObj;
      }
    };

    return (
      <div className={modalClasses} tabIndex="-1" role="dialog">
        <div className={verticalHelperClass}>
          <div className="modal-dialog vertical-alignment-middle">
            <div className="modal-content">
              <div className="modal-header" style={this.props.headerStyle}>
                { this.props.closeButton ? <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" dangerouslySetInnerHTML={{__html: '&times;'}} ></span>
                </button> : null }
                <h4 className="modal-title">
                  { parseContent(this.props.title) }
                </h4>
              </div>
              <div className="modal-body">
                { parseContent(this.props.body) }
              </div>
              <div className="modal-footer">
                { parseContent(this.props.footer) }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

Modal.propTypes = {
  title: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.shape({})
  ]),
  body: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.shape({})
  ]),
  footer: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.shape({})
  ]),
  closeButton: React.PropTypes.bool,
  keyboardClose: React.PropTypes.bool,
  backdrop: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ]),
  headerStyle: React.PropTypes.shape({}),
  classNames: React.PropTypes.array,
  verticallyCentered: React.PropTypes.bool
};

Modal.defaultProps = {
  title: '',
  body: '',
  footer: '',
  closeButton: false,
  keyboardClose: false,
  backdrop: false,
  headerStyle: {},
  classNames: [],
  verticallyCentered: true
};
