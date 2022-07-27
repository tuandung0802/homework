import React from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../../main/actionsType";

import styled from "styled-components";
const AddProduct = () => {
  const dispatch = useDispatch();
  const addProduct = () => {
    console.log("Add Product");
    dispatch({ type: Actions.ADD_PRODUCT });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-horizontal">
        <fieldset>
          <legend>ADD PRODUCT</legend>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="product_name">
              PRODUCT NAME
            </label>
            <div className="col-md-4">
              <input
                id="product_name"
                name="product_name"
                placeholder="PRODUCT NAME"
                className="form-control input-md"
                required=""
                type="text"
              />
            </div>
          </div>

          <div className="form-group">
            <label
              className="col-md-4 control-label"
              htmlFor="product_categorie"
            >
              PRODUCT CATEGORY
            </label>
            <div className="col-md-4">
              <input
                id="product_category"
                name="product_catrgory"
                placeholder="PRODUCT CATEGORY"
                className="form-control input-md"
                required=""
                type="text"
              />
            </div>
          </div>

          <div className="form-group">
            <label
              className="col-md-4 control-label"
              htmlFor="product_description"
            >
              PRODUCT DESCRIPTION
            </label>
            <div className="col-md-4">
              <textarea
                className="form-control"
                id="product_description"
                name="product_description"
              ></textarea>
            </div>
          </div>

          <div className="form-group">
            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="filebutton">
                main_image
              </label>
              <div className="col-md-4">
                <input
                  id="filebutton"
                  name="filebutton"
                  className="input-file"
                  type="file"
                />
              </div>
            </div>
          </div>
          {/* <div class="form-group">
            <label class="col-md-4 control-label" for="product_id">
              PRODUCT ID
            </label>
            <div class="col-md-4">
              <input
                id="product_id"
                name="product_id"
                placeholder="PRODUCT ID"
                class="form-control input-md"
                required=""
                type="text"
              />
            </div>
          </div> */}
          <div className="form-group">
            <label
              className="col-md-4 control-label"
              htmlFor="singlebutton"
            ></label>
            <div className="col-md-4">
              <button
                id="singlebutton"
                name="singlebutton"
                className="btn btn-primary"
                onClick={addProduct()}
              >
                Button
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddProduct;
