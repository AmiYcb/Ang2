package com.boycottisrail.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.boycottisrail.backend.service.ScrapingService;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/scrape")
public class ScrapingController {

    @Autowired
    private ScrapingService scrapingService;

    @GetMapping("/url")
    public String scrapeData() {
        String url ="https://qate3-israel.com/";
        return scrapingService.scrapeAndSaveToJson(url);
    }
    @GetMapping("/test")
    public String testData() {
        return "test---";
    }
}
// <div class="border border-gray-200 rounded-lg "><div class="flex m-3 "><img src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg" class="h-24 w-20 object-contain"><div class="my-auto space-y-1 ml-5"><div class="text-sm text-primary-green">Adidas</div><div class="uppercase text-base font-semibold">Adidas</div></div></div><div class="flex justify-evenly py-3 bg-[#F9F9F9] rounded-b-lg"><h3 class="font-CairoMedium px-3 py-1 rounded-full text-primary-green underline cursor-pointer">الدليل</h3><h3 class="font-CairoMedium border px-5 py-1 border-primary-green rounded-full bg-white text-primary-green cursor-pointer">البحث عن البدائل</h3></div></div>