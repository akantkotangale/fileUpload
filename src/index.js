import React, { Component } from "react";

export default class FileUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: null,
      error: false,
      errorMgs: null
    };
  }

  // fileType = ["xls", "pdf", "doc", "docx", "xlsx"];
  fileType = this.props.fileType !== undefined ? this.props.fileType : [];

  onChangeFile = e => {
    let file = e.target.files[0];
    if (this.extensionValidation(file)) {
      this.setState(
        {
          errorMgs: null,
          fileName: file !== undefined ? file.name : "",
          error: false
        },
        () => {
          return this.sizeValidation(file);
        }
      );
    } else {
      this.setState({
        error: true,
        fileName: file !== undefined ? file.name : "",
        errorMgs:
          this.props.extErrorMsg !== undefined
            ? this.props.extErrorMsg
            : "Choose a file with correct extension"
      });
    }
  };

  extensionValidation = val => {
    let extension = val != undefined ? val.name.split(".").pop() : null;
    return this.fileType.length > 0 ? this.fileType.includes(extension) : true;
  };

  sizeValidation = val => {
    const { name, onSelectFile, maxSize, sizeErrorMsg } = this.props;
    let mxSize = maxSize > 0 ? maxSize * 1000 : 0;
    if (val.size > mxSize) {
      this.setState({
        errorMgs:
          sizeErrorMsg !== undefined
            ? sizeErrorMsg
            : `max size is ${mxSize} KB`,
        error: true
      });
      return;
    } else {
      this.setState(
        {
          errorMgs: null,
          error: false
        },
        () => {
          onSelectFile({
            name: name ? name : "",
            value: val
          });
        }
      );
    }
    return;
  };

  render() {
    const { error, errorMgs, fileName } = this.state;
    const {name} = this.props;
    return (
      <div className="form-group f-part-row-cont">
        <div className="d-flex flex-column">
          <div className="f-cont-wrap">
            <input
              className="inputfile inputfile-1"
              style={{ display: "none" }}
              type="file"
              id={name}
              accept={this.fileType}
              onChange={this.onChangeFile}
            />
            <label htmlFor={name} className="btn btn-outline-primary m-0">
              Browse
            </label>{" "}
            <label className="form-control file-name">
              <span className="file-name-text">{fileName}</span>
            </label>
          </div>
          <div className="error-message">
            {errorMgs && error && (
              <span className="error-message-text">{errorMgs}</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}
