import React, { useState } from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Classes from "./Filter.module.css";

const Filter = props => {
  const [filterForm, setFilterFrom] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Enter Product Name"
      },
      value: ""
    },
    deparmentName: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Enter Department Name"
      },
      value: ""
    },
    promotionCode: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Enter Promotion Code"
      },
      value: ""
    }
  });

  const inputChangedHandler = (event, id) => {
    event.preventDefault();
    console.log("[FROM INPUT CHANGE HANDLER]", id);
    const value = event.target.value;
    setFilterFrom(prevFromFilter => {
      let updatedForm = { ...prevFromFilter };
      let updatedFormElement = { ...updatedForm[id] };
      updatedFormElement.value = value;
      updatedForm[id] = updatedFormElement;
      return updatedForm;
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    const filterParameters = {
      search_column: "name",
      query: filterForm.name.value,
      department_name: filterForm.deparmentName.value,
      promotion_code: filterForm.promotionCode.value
    };
    props.onApplyFilter(filterParameters);
  };

  const getForm = () => {
    let inputElements = [];

    for (let key in filterForm) {
      inputElements.push({
        id: key,
        config: filterForm[key]
      });
    }
    inputElements = inputElements.map(element => {
      return (
        <Input
          changed={event => inputChangedHandler(event, element.id)}
          elementType={element.config.elementType}
          elementConfig={element.config.elementConfig}
          value={element.config.value}
          key={element.id}
          label={element.id}
        />
      );
    });
    let form = (
      <form>
        {inputElements}
        <Button buttonType="Success" clicked={submitHandler}>
          Click here to apply filter
        </Button>
      </form>
    );

    return form;
  };

  return <div className={Classes.Filter}>{getForm()}</div>;
};

export default Filter;
