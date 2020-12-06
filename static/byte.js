function convertByte(){
    let unitA = $('#byteUnitA option:selected').val();
    let unitB = $('#byteUnitB option:selected').val();

    if (unitA === '(b) bit' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
    if (unitA === '(b) bit' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * (1/8);
        $('#byteAfter').val(after);
    }
    if (unitA === '(b) bit' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/8000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(b) bit' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/8000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(b) bit' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/8000000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(b) bit' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/8000000000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(b) bit' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/8000000000000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(b) bit' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/8000000000000000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(b) bit' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/8000000000000000000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(b) bit' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/8192);
        $('#byteAfter').val(after);
    }
    if (unitA === '(b) bit' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/8389000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(b) bit' && unitB === '(GiB) Gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/8590000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(b) bit' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/8796000000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(b) bit' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/9007000000000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(b) bit' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/9223000000000000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(b) bit' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000000000000105879;
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 8;
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1000000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1000000000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1000000000000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1000000000000000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1000000000000000000000);
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1024);
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000953674;
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(GiB) gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.00000000093132;
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.00000000000090949;
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.00000000000000088818;
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000000000867362;
        $('#byteAfter').val(after);
    }
    if (unitA === '(B) byte' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000000000000847033;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 8000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * 1000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000000001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1.024);
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1049);
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(GiB) gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.00000093132;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.00000000090949;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.00000000000088818;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000000867362;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KB) kilobyte' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.00000000000000000084703;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 8000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 976.563;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.953674;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(GiB) gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000931323;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.00000090949;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.00000000088818;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000867362;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MB) megabyte' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000000847033;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 8000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 976563;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 953.674;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(GiB) gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.931323;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000909495;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.00000088818;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000867362;
        $('#byteAfter').val(after);
    }
    if (unitA === '(GB) gigabyte' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000847033;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 8000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 976600000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 953674;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(GiB) gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 931.323;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.909495;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000888178;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000867362;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TB) terabyte' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000847033;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 8000000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 976600000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 953700000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(GiB) gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 931323;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 909.495;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.888178;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000867362;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PB) petabyte' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000847033;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 8000000000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.001;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 976600000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 953700000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(GiB) gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 931300000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 909495;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 888.178;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.867362;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EB) exabyte' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000847033;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 8000000000000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000000000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 976600000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 953700000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(GiB) gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 931300000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 909500000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 888178;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * 867.362;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZB) zettabyte' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.847033;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 8192;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * 1024;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * 1.024;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.001024;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000001024;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000001024;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000001024;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000001024;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000000001024;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1024);
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(GiB) gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.00000095367;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.00000000093132;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.00000000000090949;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000000888178;
        $('#byteAfter').val(after);
    }
    if (unitA === '(KiB) kibibyte' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000000000867362;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 8389000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * 1049000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * 1049;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1.049;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.001049;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000001049;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000001049;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000001049;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000001049;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1024;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(GiB) gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1024);
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.00000095367;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.00000000093132;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000909495;
        $('#byteAfter').val(after);
    }
    if (unitA === '(MiB) mebibyte' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000000888178;
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 8590000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * 1074000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * 1074000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1074;
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1.074;
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.001074;
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000001074;
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000001074;
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000001074;
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1048576;
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1024;
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(GiB) gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1024);
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1048576);
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000931323;
        $('#byteAfter').val(after);
    }
    if (unitA === '(Gib) gibibyte' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.000000000000909495;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 8796000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * 1099511600000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * 1099511600;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1099511.6;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1099.5116;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1.0995116;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.0010995116;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.0000010995116;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.0000000010995116;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1073741824;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1048576;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(GiB) gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1024;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1024);
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1048576);
        $('#byteAfter').val(after);
    }
    if (unitA === '(TiB) tebibyte' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1073741824);
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 9007000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * 1125899900000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * 1125899900000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1125899900;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1125899.9;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1125.8999;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1.1258999;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.0011258999;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.0000011258999;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1099511600000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1073741824;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(GiB) gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1048576;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1024;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1024);
        $('#byteAfter').val(after);
    }
    if (unitA === '(PiB) pebibyte' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1048576);
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 9223000000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * 1152921500000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * 1152921500000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1152921500000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1152921500;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1152921.5;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1152.9215;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1.1529215;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * 0.0011529215;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1125899900000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1099511600000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(GiB) gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1073741824;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1048576;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1024;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
    if (unitA === '(EiB) exbibyte' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * (1/1024);
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(b) bit') {
        let before = $('#byteBefore').val();
        let after = before * 9445000000000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(B) byte') {
        let before = $('#byteBefore').val();
        let after = before * 1180591600000000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(KB) kilobyte') {
        let before = $('#byteBefore').val();
        let after = before * 1180591600000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(MB) megabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1180591600000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(GB) gigabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1180591600000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(TB) terabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1180591600;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(PB) petabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1180591.6;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(EB) exabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1180.5916;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(ZB) zettabyte') {
        let before = $('#byteBefore').val();
        let after = before * 1.1805916;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(KiB) kibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1152921500000000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(MiB) mebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1125899900000000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(GiB) gibibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1099511600000;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(TiB) tebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1073741824;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(PiB) pebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1048576;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(EiB) exbibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1024;
        $('#byteAfter').val(after);
    }
    if (unitA === '(ZiB) zebibyte' && unitB === '(ZiB) zebibyte') {
        let before = $('#byteBefore').val();
        let after = before * 1;
        $('#byteAfter').val(after);
    }
}