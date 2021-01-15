import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Title as TitleComponent } from "$components/Title";
import { IComponentProps } from "./interfaces";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import styles from "./styles.module.scss";
import CheckboxIcon from "@material-ui/icons/CheckBox";

export const Title: FunctionComponent<IComponentProps> = ({
  className,
  translations,
  disabled,
  checked,
  onChange
}) => (
  <div className={classNames(className, styles.titleContainer)}>
    <TitleComponent className={styles.title}>{translations?.title}</TitleComponent>
    {translations && (
      <FormControlLabel
        label={translations.hideRejectedAndExpiredOffers}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        control={
          <Checkbox
            size="small"
            color="default"
            checkedIcon={<CheckboxIcon fontSize="small" className={styles.color} />}
          />
        }
      />
    )}
  </div>
);
