import React, { Component, Fragment } from "react";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
  
export const MySwal = withReactContent(Swal);
export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

export function sweetAlert(props) {
    MySwal.fire({
      title: <b>{props.title}</b>,
      icon: props.icon ?? 'info',
      text: props.text,
      footer: 'Copyright '+new Date().getFullYear(),
      onOpen: () => {
      },
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      }
    }).then((result) => {
      if(result.value)
      {
        if (typeof props.func === 'function') {
            props.func();
        }
      }
    });
}

export function sweetAlertHtml(props) {
    MySwal.fire({
      title: <b>{props.title}</b>,
      icon: props.icon ?? 'info',
      html: props.html,
      footer: 'Copyright '+new Date().getFullYear(),
      onOpen: () => {
      },
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      }
    }).then((result) => {
      if(result.value)
      {
        if (typeof props.func === 'function') {
            props.func();
        }
      }
    });
}

export function toastAlert(props) {
      Toast.fire({ icon: props.icon, title: props.title});
}