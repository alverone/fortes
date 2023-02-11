$(function () {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  $("#total").html(spacedNum(parseInt(localStorage.getItem("summedPrice"))));
  $("#space").html(localStorage.getItem("space"));
  $("#pricePerMetre").html(spacedNum(localStorage.getItem("costPerMetre")));

  $(".form-2").on("submit", async function (e) {
    e.preventDefault();

    if (!$("#agreementCheckbox").is(":checked")) {
      $(".warning.agreementcheckbox").toggle(true);
    } else {
      $(".warning.agreementcheckbox").toggle(false);
    }
    if (!$("#sPhone").val() && !$("#sEmail").val()) {
      $(".warning.inputs.phone").toggle(true);
    } else {
      $(".warning.inputs.phone").toggle(false);
    }
    if (!$("#sName").val()) {
      $(".warning.inputs.name").toggle(true);
    } else {
      $(".warning.inputs.name").toggle(false);
    }

    if ($("#sEmail").val().length == 0) {
      $(".warning.inputs.wrongEmail").toggle(false);
      $(".warning.inputs.emptyEmail").toggle(true);
    } else if (!emailRegex.test($("#sEmail").val())) {
      $(".warning.inputs.wrongEmail").toggle(true);
      $(".warning.inputs.emptyEmail").toggle(false);
    } else {
      $(".warning.inputs.wrongEmail").toggle(false);
      $(".warning.inputs.emptyEmail").toggle(false);
    }

    if ($(".warning").is(":visible")) {
      e.preventDefault();
      return false;
    } else {
      submit();
    }
  });

  async function submit() {
    $(".modal-note").html("Зачекайте...");

    const pageContent = $("html").clone().find("script").remove().end().html();
    const fileString =
      `<!DOCTYPE html><html lang="uk">` + pageContent + `</html>`;
    const file = new File([fileString], "source.html", {
      type: "text/html",
    });

    const body = new FormData();
    body.append("file", file, "source.html");

    const response = await fetch("https://api.fortes.agency/convert", {
      method: "POST",
      body: body,
    });
    const result = await response.json();
    const id = result.success ? result.id : "";

    $(".modal-note").html(
      "Ми надіслали вам лист на електронну пошту. Якщо ви не бачите його у списку, перевірте папку Спам або зачекайте декілька хвилин."
    );

    fetch("https://api.fortes.agency/mail", {
      method: "POST",
      body: JSON.stringify({
        fileId: id,
        fileName: localStorage.getItem("style"),
        recipientMail: $("#sEmail").val(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).finally(() => {
      setTimeout(() => {
        window.location.assign("/sdyakuiemo");
      }, 2000);
    });
  }

  $("img").each(function () {
    $(this).attr("loading", "eager");
  });

  function spacedNum(num) {
    return Intl.NumberFormat("uk-UA", {
      maximumFractionDigits: 2,
    }).format(parseFloat(num));
  }
});
