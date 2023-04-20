<?php

namespace App\Controller;

use App\Entity\Coordenadas;
use App\Form\CoordenadasType;
use App\Repository\CoordenadasRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/coordenadas')]
class CoordenadasController extends AbstractController
{
    #[Route('/', name: 'app_coordenadas_index', methods: ['GET', 'POST'])]
    public function index(Request $request, CoordenadasRepository $coordenadasRepository): Response
{
    $coordenada = new Coordenadas();
    $form = $this->createForm(CoordenadasType::class, $coordenada);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        // Decodificar los datos JSON enviados desde React
        $data = json_decode($request->getContent(), true);

        // Asignar los valores de latitud y longitud a la instancia de Coordenadas
        $coordenada->setLatitud($data['latitud']);
        $coordenada->setLongitud($data['longitud']);

        // Guardar la instancia de Coordenadas en la base de datos
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($coordenada);
        $entityManager->flush();

        return $this->json($coordenada, $status = 200, $headers = ['Access-Control-Allow-Origin'=>'*']);
    }

    return new Response('Error al procesar la solicitud', 400);
}

    // return $this->render('coordenadas/index.html.twig', [
    //     'coordenadas' => $coordenadasRepository->findAll(),
    //     'form' => $form->createView(),
    // ]);
}
