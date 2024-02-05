package com.boycottisrail.backend.service;

import com.boycottisrail.backend.dao.entities.ProductBoycott;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import com.boycottisrail.backend.dao.entities.BrandBoycott;

@Service
public class ScrapingService {

    public String scrapeAndSaveToJson(String url) {
        try {
            Document document = Jsoup.connect(url).get();

            // Sélectionner tous les éléments avec la classe "border"
            Elements brandElements = document.select(".border border-gray-200 rounded-lg");

            List<BrandBoycott> brandList = new ArrayList<>();

            for (Element brandElement : brandElements) {
                String brandName = brandElement.select(".text-sm").first().text();
                String productName = brandElement.select(".font-semibold").text();
                String productlogoUrl = brandElement.select("img").attr("src");
                System.out.printf(brandName);
                System.out.printf(productName);
                System.out.printf(productlogoUrl);

                // BrandBoycott brand = new BrandBoycott();
                // brand.brandName=brandName;

                // Si la classe Product existe, créez une liste de produits
                Elements productElements = brandElement.select(".products");
                List<ProductBoycott> productList = new ArrayList<>();
                for (Element productElement : productElements) {
                    // Logique pour extraire les données des produits
                    ProductBoycott product = new ProductBoycott();
                    // product.setName(productElement.select(".product-name").text());
                    // product.setLogoUrl(productElement.select(".product-logo").attr("src"));
                    // product.setGuideUrl(productElement.select(".product-guide").text());
                    // product.setBrand(brand); // Attachez le produit à la marque

                    productList.add(product);
                }
                // brand.setProducts(productList);

                // brandList.add(brand);
            }

            // Convertir la liste en JSON
            ObjectMapper objectMapper = new ObjectMapper();
            String jsonString = objectMapper.writeValueAsString(brandList);

            // Enregistrer le JSON dans un fichier
            String filePath = "brand_data.json";
            objectMapper.writeValue(new File(filePath), brandList);

            System.out.println("Données extraites avec succès et enregistrées dans " + filePath);
            return brandList.toString();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Erreur lors du scraping : " + e.getMessage());
            return "Erreur lors du scraping : " + e.getMessage();
        }
    }
}
