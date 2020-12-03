function convertArea() {
    let unitA = $('#areaUnitA option:selected').val();
    let unitB = $('#areaUnitB option:selected').val();

    if (unitA === 'square nanometer' && unitB === 'square nanometer') {
        let before = $('#areaBefore').val();
        let after = before * 1;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square nanometer' && unitB === 'square micrometer') {
        let before = $('#areaBefore').val();
        let after = before * 0.000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square nanometer' && unitB === 'square millimeter') {
        let before = $('#areaBefore').val();
        let after = before * 0.000000000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square nanometer' && unitB === 'square centimeter') {
        let before = $('#areaBefore').val();
        let after = before * 0.00000000000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square nanometer' && unitB === 'square meter') {
        let before = $('#areaBefore').val();
        let after = before * 0.000000000000000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square nanometer' && unitB === 'square kilometer') {
        let before = $('#areaBefore').val();
        let after = before * 0.000000000000000000000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square nanometer' && unitB === 'hectare') {
        let before = $('#areaBefore').val();
        let after = before * 0.0000000000000000000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square nanometer' && unitB === 'square inch') {
        let before = $('#areaBefore').val();
        let after = before * 0.00000000000000155;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square nanometer' && unitB === 'square feet') {
        let before = $('#areaBefore').val();
        let after = before * 0.000000000000000010764;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square nanometer' && unitB === 'square yard') {
        let before = $('#areaBefore').val();
        let after = before * 0.000000000000000011196;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square nanometer' && unitB === 'square mile') {
        let before = $('#areaBefore').val();
        let after = before * 0.0000000000000000000000003861;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square nanometer' && unitB === 'acre') {
        let before = $('#areaBefore').val();
        let after = before * 0.00000000000000000000024711;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square micrometer' && unitB === 'square nanometer') {
        let before = $('#areaBefore').val();
        let after = before * 1000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square micrometer' && unitB === 'square micrometer') {
        let before = $('#areaBefore').val();
        let after = before * 1;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square micrometer' && unitB === 'square millimeter') {
        let before = $('#areaBefore').val();
        let after = before * 0.000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square micrometer' && unitB === 'square centimeter') {
        let before = $('#areaBefore').val();
        let after = before * 0.00000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square micrometer' && unitB === 'square meter') {
        let before = $('#areaBefore').val();
        let after = before * 0.000000000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square micrometer' && unitB === 'square kilometer') {
        let before = $('#areaBefore').val();
        let after = before * 0.000000000000000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square micrometer' && unitB === 'hectare') {
        let before = $('#areaBefore').val();
        let after = before * 0.0000000000000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square micrometer' && unitB === 'square inch') {
        let before = $('#areaBefore').val();
        let after = before * 0.00000000155;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square micrometer' && unitB === 'square feet') {
        let before = $('#areaBefore').val();
        let after = before * 0.000000000010764;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square micrometer' && unitB === 'square yard') {
        let before = $('#areaBefore').val();
        let after = before * 0.000000000011196;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square micrometer' && unitB === 'square mile') {
        let before = $('#areaBefore').val();
        let after = before * 0.0000000000000000003861;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square micrometer' && unitB === 'acre') {
        let before = $('#areaBefore').val();
        let after = before * 0.00000000000000024711;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square millimeter' && unitB === 'square nanometer') {
        let before = $('#areaBefore').val();
        let after = before * 1000000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square millimeter' && unitB === 'square micrometer') {
        let before = $('#areaBefore').val();
        let after = before * 1000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square millimeter' && unitB === 'square millimeter') {
        let before = $('#areaBefore').val();
        let after = before * 1;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square millimeter' && unitB === 'square centimeter') {
        let before = $('#areaBefore').val();
        let after = before * 0.01;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square millimeter' && unitB === 'square meter') {
        let before = $('#areaBefore').val();
        let after = before * 0.000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square millimeter' && unitB === 'square kilometer') {
        let before = $('#areaBefore').val();
        let after = before * 0.000000000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square millimeter' && unitB === 'hectare') {
        let before = $('#areaBefore').val();
        let after = before * 0.0000000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square millimeter' && unitB === 'square inch') {
        let before = $('#areaBefore').val();
        let after = before * 0.00155;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square millimeter' && unitB === 'square feet') {
        let before = $('#areaBefore').val();
        let after = before * 0.000010764;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square millimeter' && unitB === 'square yard') {
        let before = $('#areaBefore').val();
        let after = before * 0.000001196;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square millimeter' && unitB === 'square mile') {
        let before = $('#areaBefore').val();
        let after = before * 0.0000000000003861;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square millimeter' && unitB === 'acre') {
        let before = $('#areaBefore').val();
        let after = before * 0.00000000024711;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square centimeter' && unitB === 'square nanometer') {
        let before = $('#areaBefore').val();
        let after = before * 100000000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square centimeter' && unitB === 'square micrometer') {
        let before = $('#areaBefore').val();
        let after = before * 100000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square centimeter' && unitB === 'square millimeter') {
        let before = $('#areaBefore').val();
        let after = before * 100;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square centimeter' && unitB === 'square centimeter') {
        let before = $('#areaBefore').val();
        let after = before * 1;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square centimeter' && unitB === 'square meter') {
        let before = $('#areaBefore').val();
        let after = before * 0.0001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square centimeter' && unitB === 'square kilometer') {
        let before = $('#areaBefore').val();
        let after = before * 0.0000000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square centimeter' && unitB === 'hectare') {
        let before = $('#areaBefore').val();
        let after = before * 0.00000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square centimeter' && unitB === 'square inch') {
        let before = $('#areaBefore').val();
        let after = before * 0.155;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square centimeter' && unitB === 'square feet') {
        let before = $('#areaBefore').val();
        let after = before * 0.00107639;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square centimeter' && unitB === 'square yard') {
        let before = $('#areaBefore').val();
        let after = before * 0.000119599;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square centimeter' && unitB === 'square mile') {
        let before = $('#areaBefore').val();
        let after = before * 0.00000000003861;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square centimeter' && unitB === 'acre') {
        let before = $('#areaBefore').val();
        let after = before * 0.000000024711;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square meter' && unitB === 'square nanometer') {
        let before = $('#areaBefore').val();
        let after = before * 1000000000000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square meter' && unitB === 'square micrometer') {
        let before = $('#areaBefore').val();
        let after = before * 1000000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square meter' && unitB === 'square millimeter') {
        let before = $('#areaBefore').val();
        let after = before * 1000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square meter' && unitB === 'square centimeter') {
        let before = $('#areaBefore').val();
        let after = before * 10000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square meter' && unitB === 'square meter') {
        let before = $('#areaBefore').val();
        let after = before * 1;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square meter' && unitB === 'square kilometer') {
        let before = $('#areaBefore').val();
        let after = before * 0.000001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square meter' && unitB === 'hectare') {
        let before = $('#areaBefore').val();
        let after = before * 0.0001;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square meter' && unitB === 'square inch') {
        let before = $('#areaBefore').val();
        let after = before * 1550;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square meter' && unitB === 'square feet') {
        let before = $('#areaBefore').val();
        let after = before * 10.7639;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square meter' && unitB === 'square yard') {
        let before = $('#areaBefore').val();
        let after = before * 1.19599;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square meter' && unitB === 'square mile') {
        let before = $('#areaBefore').val();
        let after = before * 0.0000003861;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square meter' && unitB === 'acre') {
        let before = $('#areaBefore').val();
        let after = before * 0.000247105;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square kilometer' && unitB === 'square nanometer') {
        let before = $('#areaBefore').val();
        let after = before * 1000000000000000000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square kilometer' && unitB === 'square micrometer') {
        let before = $('#areaBefore').val();
        let after = before * 1000000000000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square kilometer' && unitB === 'square millimeter') {
        let before = $('#areaBefore').val();
        let after = before * 1000000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square kilometer' && unitB === 'square centimeter') {
        let before = $('#areaBefore').val();
        let after = before * 10000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square kilometer' && unitB === 'square meter') {
        let before = $('#areaBefore').val();
        let after = before * 1000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square kilometer' && unitB === 'square kilometer') {
        let before = $('#areaBefore').val();
        let after = before * 1;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square kilometer' && unitB === 'hectare') {
        let before = $('#areaBefore').val();
        let after = before * 100;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square kilometer' && unitB === 'square inch') {
        let before = $('#areaBefore').val();
        let after = before * 1550000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square kilometer' && unitB === 'square feet') {
        let before = $('#areaBefore').val();
        let after = before * 10760000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square kilometer' && unitB === 'square yard') {
        let before = $('#areaBefore').val();
        let after = before * 1196000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square kilometer' && unitB === 'square mile') {
        let before = $('#areaBefore').val();
        let after = before * 0.386102;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square kilometer' && unitB === 'acre') {
        let before = $('#areaBefore').val();
        let after = before * 247.105;
        $('#areaAfter').val(after);
    }
    if (unitA === 'hectare' && unitB === 'square nanometer') {
        let before = $('#areaBefore').val();
        let after = before * 10000000000000000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'hectare' && unitB === 'square micrometer') {
        let before = $('#areaBefore').val();
        let after = before * 10000000000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'hectare' && unitB === 'square millimeter') {
        let before = $('#areaBefore').val();
        let after = before * 10000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'hectare' && unitB === 'square centimeter') {
        let before = $('#areaBefore').val();
        let after = before * 100000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'hectare' && unitB === 'square meter') {
        let before = $('#areaBefore').val();
        let after = before * 10000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'hectare' && unitB === 'square kilometer') {
        let before = $('#areaBefore').val();
        let after = before * 0.01;
        $('#areaAfter').val(after);
    }
    if (unitA === 'hectare' && unitB === 'hectare') {
        let before = $('#areaBefore').val();
        let after = before * 1;
        $('#areaAfter').val(after);
    }
    if (unitA === 'hectare' && unitB === 'square inch') {
        let before = $('#areaBefore').val();
        let after = before * 15500000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'hectare' && unitB === 'square feet') {
        let before = $('#areaBefore').val();
        let after = before * 107639;
        $('#areaAfter').val(after);
    }
    if (unitA === 'hectare' && unitB === 'square yard') {
        let before = $('#areaBefore').val();
        let after = before * 11959.9;
        $('#areaAfter').val(after);
    }
    if (unitA === 'hectare' && unitB === 'square mile') {
        let before = $('#areaBefore').val();
        let after = before * 0.00386102;
        $('#areaAfter').val(after);
    }
    if (unitA === 'hectare' && unitB === 'acre') {
        let before = $('#areaBefore').val();
        let after = before * 640;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square inch' && unitB === 'square nanometer') {
        let before = $('#areaBefore').val();
        let after = before * 645200000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square inch' && unitB === 'square micrometer') {
        let before = $('#areaBefore').val();
        let after = before * 645200000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square inch' && unitB === 'square millimeter') {
        let before = $('#areaBefore').val();
        let after = before * 645.2;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square inch' && unitB === 'square centimeter') {
        let before = $('#areaBefore').val();
        let after = before * 6.4516;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square inch' && unitB === 'square meter') {
        let before = $('#areaBefore').val();
        let after = before * 0.00064516;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square inch' && unitB === 'square kilometer') {
        let before = $('#areaBefore').val();
        let after = before * 0.00000000064516;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square inch' && unitB === 'hectare') {
        let before = $('#areaBefore').val();
        let after = before * 0.000000064516;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square inch' && unitB === 'square inch') {
        let before = $('#areaBefore').val();
        let after = before * 1;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square inch' && unitB === 'square feet') {
        let before = $('#areaBefore').val();
        let after = before * (1/144);
        $('#areaAfter').val(after);
    }
    if (unitA === 'square inch' && unitB === 'square yard') {
        let before = $('#areaBefore').val();
        let after = before * (1/1296);
        $('#areaAfter').val(after);
    }
    if (unitA === 'square inch' && unitB === 'square mile') {
        let before = $('#areaBefore').val();
        let after = before * 0.0000000002491;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square inch' && unitB === 'acre') {
        let before = $('#areaBefore').val();
        let after = before * 0.00000015942;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square feet' && unitB === 'square nanometer') {
        let before = $('#areaBefore').val();
        let after = before * 92900000000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square feet' && unitB === 'square micrometer') {
        let before = $('#areaBefore').val();
        let after = before * 92900000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square feet' && unitB === 'square millimeter') {
        let before = $('#areaBefore').val();
        let after = before * 92900;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square feet' && unitB === 'square centimeter') {
        let before = $('#areaBefore').val();
        let after = before * 929.03;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square feet' && unitB === 'square meter') {
        let before = $('#areaBefore').val();
        let after = before * 0.092903;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square feet' && unitB === 'square kilometer') {
        let before = $('#areaBefore').val();
        let after = before * 0.000000092903;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square feet' && unitB === 'hectare') {
        let before = $('#areaBefore').val();
        let after = before * 0.0000092903;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square feet' && unitB === 'square inch') {
        let before = $('#areaBefore').val();
        let after = before * 144;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square feet' && unitB === 'square feet') {
        let before = $('#areaBefore').val();
        let after = before * 1;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square feet' && unitB === 'square yard') {
        let before = $('#areaBefore').val();
        let after = before * (1/9);
        $('#areaAfter').val(after);
    }
    if (unitA === 'square feet' && unitB === 'square mile') {
        let before = $('#areaBefore').val();
        let after = before * 0.00000003587;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square feet' && unitB === 'acre') {
        let before = $('#areaBefore').val();
        let after = before * 0.000022957;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square yard' && unitB === 'square nanometer') {
        let before = $('#areaBefore').val();
        let after = before * 836100000000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square yard' && unitB === 'square micrometer') {
        let before = $('#areaBefore').val();
        let after = before * 836100000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square yard' && unitB === 'square millimeter') {
        let before = $('#areaBefore').val();
        let after = before * 836100;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square yard' && unitB === 'square centimeter') {
        let before = $('#areaBefore').val();
        let after = before * 8361.27;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square yard' && unitB === 'square meter') {
        let before = $('#areaBefore').val();
        let after = before * 0.8361;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square yard' && unitB === 'square kilometer') {
        let before = $('#areaBefore').val();
        let after = before * 0.0000008361;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square yard' && unitB === 'hectare') {
        let before = $('#areaBefore').val();
        let after = before * 0.000083613;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square yard' && unitB === 'square inch') {
        let before = $('#areaBefore').val();
        let after = before * 1296;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square yard' && unitB === 'square feet') {
        let before = $('#areaBefore').val();
        let after = before * 9;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square yard' && unitB === 'square yard') {
        let before = $('#areaBefore').val();
        let after = before * 1;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square yard' && unitB === 'square mile') {
        let before = $('#areaBefore').val();
        let after = before * 0.00000032283;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square yard' && unitB === 'acre') {
        let before = $('#areaBefore').val();
        let after = before * (1/4840);
        $('#areaAfter').val(after);
    }
    if (unitA === 'square mile' && unitB === 'square nanometer') {
        let before = $('#areaBefore').val();
        let after = before * 2590000000000000000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square mile' && unitB === 'square micrometer') {
        let before = $('#areaBefore').val();
        let after = before * 2590000000000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square mile' && unitB === 'square millimeter') {
        let before = $('#areaBefore').val();
        let after = before * 2590000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square mile' && unitB === 'square centimeter') {
        let before = $('#areaBefore').val();
        let after = before * 25900000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square mile' && unitB === 'square meter') {
        let before = $('#areaBefore').val();
        let after = before * 2590000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square mile' && unitB === 'square kilometer') {
        let before = $('#areaBefore').val();
        let after = before * 2.59;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square mile' && unitB === 'hectare') {
        let before = $('#areaBefore').val();
        let after = before * 259;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square mile' && unitB === 'square inch') {
        let before = $('#areaBefore').val();
        let after = before * 4014000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square mile' && unitB === 'square feet') {
        let before = $('#areaBefore').val();
        let after = before * 27880000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square mile' && unitB === 'square yard') {
        let before = $('#areaBefore').val();
        let after = before * 3098000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square mile' && unitB === 'square mile') {
        let before = $('#areaBefore').val();
        let after = before * 1;
        $('#areaAfter').val(after);
    }
    if (unitA === 'square mile' && unitB === 'acre') {
        let before = $('#areaBefore').val();
        let after = before * 640;
        $('#areaAfter').val(after);
    }
    if (unitA === 'acre' && unitB === 'square nanometer') {
        let before = $('#areaBefore').val();
        let after = before * 4047000000000000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'acre' && unitB === 'square micrometer') {
        let before = $('#areaBefore').val();
        let after = before * 4047000000000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'acre' && unitB === 'square millimeter') {
        let before = $('#areaBefore').val();
        let after = before * 4047000000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'acre' && unitB === 'square centimeter') {
        let before = $('#areaBefore').val();
        let after = before * 40470000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'acre' && unitB === 'square meter') {
        let before = $('#areaBefore').val();
        let after = before * 4047;
        $('#areaAfter').val(after);
    }
    if (unitA === 'acre' && unitB === 'square kilometer') {
        let before = $('#areaBefore').val();
        let after = before * 0.004047;
        $('#areaAfter').val(after);
    }
    if (unitA === 'acre' && unitB === 'hectare') {
        let before = $('#areaBefore').val();
        let after = before * 0.404686;
        $('#areaAfter').val(after);
    }
    if (unitA === 'acre' && unitB === 'square inch') {
        let before = $('#areaBefore').val();
        let after = before * 6273000;
        $('#areaAfter').val(after);
    }
    if (unitA === 'acre' && unitB === 'square feet') {
        let before = $('#areaBefore').val();
        let after = before * 43560;
        $('#areaAfter').val(after);
    }
    if (unitA === 'acre' && unitB === 'square yard') {
        let before = $('#areaBefore').val();
        let after = before * 4840;
        $('#areaAfter').val(after);
    }
    if (unitA === 'acre' && unitB === 'square mile') {
        let before = $('#areaBefore').val();
        let after = before * (1/640);
        $('#areaAfter').val(after);
    }
    if (unitA === 'acre' && unitB === 'acre') {
        let before = $('#areaBefore').val();
        let after = before * 1;
        $('#areaAfter').val(after);
    }


















}