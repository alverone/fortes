import Splide from "@splidejs/splide";
import { DesignStyle } from "./models/Style";
import { DataCollectionHandler } from "./utils/DataCollectionHandler";
import {
  LocalStorageDestination,
  LocalStorageHandler,
} from "./utils/LocalStorageHandler";

$(function () {
  const vw = window.innerWidth || document.documentElement.clientWidth;
  const vh = window.innerHeight || document.documentElement.clientHeight;

  const $splideBody = document.getElementById("splideBody");
  const $splideNext = document.getElementById("splideNext");
  const $splidePrev = document.getElementById("splidePrev");
  const $splideNextText = document.getElementById("splideNextText");
  const $splidePrevText = document.getElementById("splidePrevText");
  const $consultationButton = <HTMLInputElement>(
    document.getElementById("submitBtn")
  );
  const $node = <HTMLInputElement>document.getElementById("node");

  const $nameInput = <HTMLInputElement>document.getElementById("name");
  const $phoneInput = <HTMLInputElement>document.getElementById("phone");
  const $consultCheckbox = <HTMLInputElement>(
    document.getElementById("agreementCheckbox")
  );
  const $appliancesRadio = <HTMLInputElement>(
    document.getElementById("appliancesBool")
  );
  const $consultForm = <HTMLFormElement>(
    document.getElementById("wf-form-consult")
  );

  const splideOptions = {
    arrows: false,
    pagination: false,
    speed: 550,
    flickPower: 400,
    breakpoints: {
      480: {
        pagination: true,
        speed: 650,
      },
    },
  };

  const localStorageHandler = new LocalStorageHandler(
    LocalStorageDestination.uk,
    false
  );
  const dataHandler = new DataCollectionHandler(localStorageHandler);
  const splideCalc = new Splide(".slider-container.splide", splideOptions);

  splideCalc.mount();

  document.querySelectorAll("input").forEach(function () {
    try {
      this.name = this.dataset.name;
    } catch (_) {}
  });

  if ($(".slider-wrapper.splide").length) {
    $(".fact-link").on("click", function () {
      if ($(this).is(".active")) {
        return;
      }

      $(".fact-container.active").removeClass("active");
      $(".fact-container").eq($(this).index()).addClass("active");
      $(".fact-link.active").removeClass("active");
      $(this).addClass("active");
    });

    document.querySelectorAll("div.tab-new").forEach((element) =>
      element.addEventListener("click", function () {
        if (this.classList.contains("active")) {
          return;
        }

        const index: number = parseInt(this.dataset.sliderIndex);
        const style = DesignStyle.fromNumber(index);

        document.querySelector("div.tab-new.active").classList.remove("active");
        this.classList.add("active");

        document
          .querySelector<HTMLInputElement>(
            `div.calculator-tab[data-slider-index="${index}"]`
          )
          .click();

        $(".slider-image-new").removeClass("active");
        $(".slider-image-new").each(function () {
          if ($(this).index() == index) {
            $(this).addClass("active");
          }
        });

        //, .wrap-border.calculator-btn
        $(
          ".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var"
        ).toggle(false);

        $(
          ".calculator-slide.splide__slide .calculator-slide .color-1, .calculator-slide" +
            `.${style}, .specification-${style}.color-1`
        ).toggle(true);
        $(".calculator-slide.splide__slide .calculator-slide")
          .eq(index)
          .toggle(true);
      })
    );

    const splide = new Splide(".slider-wrapper.splide", splideOptions);
    splide.mount();

    splide.on("move", (index, ..._) => {
      setTimeout(
        () =>
          ($splideBody.style.height = $(
            ".splide__slide.is-active .active img"
          ).css("height")),
        vw > 480 ? 550 : 750
      );

      let textPrev: string = "";
      let textNext: string = "";

      $splidePrev.classList.remove("disabled");
      $splideNext.classList.remove("disabled");

      switch (index) {
        case 0:
          textPrev = "";
          textNext = "Bedroom";
          $splidePrev.classList.add("disabled");
          break;
        case 1:
          textPrev = "Living room";
          textNext = "Kitchen";
          break;
        case 2:
          textPrev = "Bedroom";
          textNext = "Shower";
          break;
        case 3:
          textPrev = "Kitchen";
          textNext = "Bathroom";
          break;
        case 4:
          textPrev = "Shower";
          textNext = "";
          $splideNext.classList.add("disabled");
          break;
        default:
          return;
      }

      $splidePrevText.innerText = textPrev;
      $splideNextText.innerText = textNext;
    });

    $splideBody.style.height = $(".splide__slide.is-active .active img").css(
      "height"
    );

    $splideNext.addEventListener("click", () => splide.go(">"));
    $splidePrev.addEventListener("click", () => splide.go("<"));
  }

  document.querySelectorAll(".calculator-tab").forEach((element) =>
    element.addEventListener("click", (evt) => {
      ///using currentTarget here to avoid bubbling to capture actual element that has the handler
      const target = <HTMLElement>evt.currentTarget;
      const index: number = parseInt(target.dataset.sliderIndex);
      const style = DesignStyle.fromNumber(index);

      //, .wrap-border.calculator-btn
      $(
        ".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var"
      ).toggle(false);

      $(
        ".calculator-slide.splide__slide .calculator-slide .color-1, .calculator-slide" +
          `.${style}, .specification-${style}.color-1`
      ).toggle(true);
      $(".calculator-slide.splide__slide .calculator-slide")
        .eq(index)
        .toggle(true);

      document
        .querySelector(".calculator-tab.active")
        .classList.remove("active");
      target.classList.add("active");

      $(".tab-new").eq(index).trigger("click");

      getCurrentColorTab().classList.remove("active");
      document
        .querySelector('.color-tab[data-color-index="1"]')
        .classList.add("active");
      localStorageHandler.set("color", 1);

      //splideCalc.refresh();
    })
  );

  $(".increment-field .increment").on("click", function () {
    if ($(this).siblings(".increment-input").length <= 0) {
      $(this).siblings(".increment-input").val(0);
    }
  });

  $consultForm.addEventListener("submit", (e) => {
    if (!$consultCheckbox.checked) {
      $(".warning.agreementcheckbox").toggle(true);
    } else {
      $(".warning.agreementcheckbox").toggle(false);
    }

    //TODO: add correct checking
    if ($phoneInput.value.length == 0) {
      $(".warning.inputs.phone").toggle(true);
    } else {
      $(".warning.inputs.phone").toggle(false);
    }

    if ($nameInput.value.length == 0) {
      $(".warning.inputs.name").toggle(true);
    } else {
      $(".warning.inputs.name").toggle(false);
    }

    if ($(".warning").is(":visible")) {
      e.preventDefault();
      return false;
    } else {
      e.preventDefault();

      const oldBtnName = $consultationButton.value;
      $consultationButton.value = "Please wait...";
      const fd = new FormData($consultForm);

      dataHandler
        .collectPortugalClientData(fd)
        .then(() => ($consultationButton.value = oldBtnName))
        .finally(() => window.location.assign("/kdyakuiemo"));
    }
  });

  $(".choice").on("click", function (e) {
    if (!$appliancesRadio.checked) {
      e.preventDefault();

      $(".choiceActive").toggleClass("choiceActive");
      $(".choiceActiveBorder").toggleClass("choiceActiveBorder");

      return;
    }

    if (!$(this).hasClass("choiceActive")) {
      $(".choiceActive").removeClass("choiceActive");
      $(".choiceActiveBorder").removeClass("choiceActiveBorder");
      $(this).addClass("choiceActive");
      $(this).parent().addClass("choiceActiveBorder");

      if ($("#node").is(":checked")) {
        $("#appliances").prop("checked", "checked");
      }
    }
  });

  $node.addEventListener("change", function () {
    if (this.checked && $(".choiceActive").length) {
      $(".choiceActive").toggleClass("choiceActive");
      $(".choiceActiveBorder").toggleClass("choiceActiveBorder");
    }
  });

  $appliancesRadio.addEventListener("change", function () {
    if (this.checked && !$(".choiceActiveBorder").length) {
      $(".choice").first().toggleClass("choiceActive");
      $(".choice").first().parent().toggleClass("choiceActiveBorder");
    }
  });

  $(".hover-text").on("click", function () {
    let obj = $(this);

    obj.siblings(".hover-modal").css("display", "flex");
    if (parseInt(obj.siblings(".hover-modal").css("opacity")) == 0) {
      if (!isInViewport(obj.siblings(".hover-modal").get(0))) {
        $([document.documentElement, document.body]).animate(
          {
            scrollTop: obj.siblings(".hover-modal").offset().top - 96,
          },
          450
        );
      }
      obj.siblings(".hover-modal").animate(
        {
          bottom: 42,
          opacity: 1,
        },
        200,
        "swing"
      );
    } else {
      obj.siblings(".hover-modal").animate(
        {
          bottom: 12,
          opacity: 0,
        },
        200,
        function () {
          obj.siblings(".hover-modal").toggle(false);
        }
      );
    }
  });

  $("div.submit-container .button").on("click", function (e) {
    e.preventDefault();

    let style = localStorageHandler.get("style");
    let color = localStorageHandler.get("color");

    dataHandler.collectPortugalCalcData();

    if (style == null || color == null) {
      style = DesignStyle.fromNumber(
        parseInt(
          document.querySelector<HTMLElement>("div.calculator-tab.active")
            .dataset.sliderIndex
        )
      ).toString();
      color = parseInt(
        document.querySelector<HTMLElement>("div.color-tab.active").dataset
          .colorIndex
      );
    }

    window.open(`/specifications/${style}-${color}`, "_blank");
  });

  $(".closing-btn").on("click", function () {
    let obj = $(this);
    obj.parent(".hover-modal").animate(
      {
        bottom: 12,
        opacity: 0,
      },
      200,
      function () {
        obj.parent(".hover-modal").toggle(false);
      }
    );
  });

  if (vw <= 480) {
    $(".image-75").removeAttr("sizes");
  }

  if (vw >= 992) {
    $(".preview-image, .blackbg-text").on({
      mouseenter: () => $(".video-cursor").css("opacity", 1),
      mouseleave: () => $(".video-cursor").css("opacity", 0),
    });
    $(".project-link-image").on({
      mouseenter: () => $(".project-dot").css("opacity", 1),
      mouseleave: () => $(".project-dot").css("opacity", 0),
    });
    $(".arrow-right").on({
      mouseenter: () => $(".small-hover.right").css("opacity", 1),
      mouseleave: () => $(".small-hover.right").css("opacity", 0),
    });
    $(".arrow-left").on({
      mouseenter: () => $(".small-hover.left").css("opacity", 1),
      mouseleave: () => $(".small-hover.left").css("opacity", 0),
    });

    document.querySelectorAll(".color-tab").forEach((element) =>
      element.addEventListener("click", (evt) => {
        const target = <HTMLElement>evt.currentTarget;
        const color = parseInt(target.dataset.colorIndex);
        const previousColor = <number>localStorageHandler.get("color");

        if (color != previousColor) {
          getCurrentColorTab().classList.remove("active");
          target.classList.add("active");

          localStorageHandler.set("color", color);

          $(".color-var").toggle(false);

          //const style = DesignStyle.fromString(<string>localStorageHandler.get("style"));
          /*, .wrap-border.calculator-btn.specification-${style}.color-${
              color + 1
            }`*/
          $(`.calculator-slide .color-${color}`).toggle(true);
        }
      })
    );

    document.querySelectorAll(".calculator-slider-option").forEach((element) =>
      element.addEventListener("click", function (evt) {
        const target = <HTMLElement>evt.currentTarget;

        document
          .querySelector(".calculator-slider-option.active")
          .classList.remove("active");
        this.classList.add("active");

        splideCalc.go(parseInt(target.dataset.sliderIndex));
      })
    );

    $(".calculator-arrow").on("click", function () {
      if ($(this).is(".arrow-right")) {
        splideCalc.go(">");
      } else {
        splideCalc.go("<");
      }

      document
        .querySelector(".calculator-slider-option.active")
        .classList.remove("active");
      $(`.calculator-slider-option:eq(${splideCalc.index})`).addClass("active");
    });

    $(".calculator form").on("keydown", (e) => {
      if (e.key == "Enter") {
        e.preventDefault();
      }
    });
  } else {
    document
      .querySelector<HTMLElement>('div.calculator-tab[data-slider-index="1"]')
      .click();
  }

  ///removed due to these elements being hidden, may be brought back
  /*if (vw <= 767) {
    $(".star").on("mouseleave", function () {
      $(this).removeClass("hidden");
      $(this).siblings(".image-price").removeClass("active");
    });

    $(".image-price").on("click", function () {
      if ($(this).is(".active")) {
        $(this).siblings(".star").removeClass("hidden");
        $(this).removeClass("active");
      }
    });

    $(".star").on("click", function () {
      if ($(this).is(".hidden")) {
        $(this).removeClass("hidden");
        $(this).siblings(".image-price").removeClass("active");
      } else {
        $(this).addClass("hidden");
        $(this).siblings(".image-price").addClass("active");
      }
    });
  }*/

  document
    .querySelectorAll(".calculate")
    .forEach((elem) =>
      elem.addEventListener(
        "click",
        () => (document.location.hash = "calculate")
      )
    );

  document.querySelectorAll(".crossbtn.calc").forEach((elem) =>
    elem.addEventListener("click", () => {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    })
  );

  function isInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 && rect.left >= 0 && rect.bottom <= vh && rect.right <= vw
    );
  }

  function getCurrentColorTab(): HTMLElement {
    return document.querySelector(
      `.color-tab[data-color-index="${localStorageHandler.get("color")}"]`
    );
  }
});
