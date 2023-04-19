<?php

namespace App\Controller;

use App\Entity\Avistamientos;
use App\Form\AvistamientosType;
use App\Repository\AvistamientosRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/avistamientos')]
class AvistamientosController extends AbstractController
{
    #[Route('/list', name: 'app_avistamientos_index', methods: ['GET'])]
    public function index(AvistamientosRepository $avistamientosRepository): Response
    {
        return $this->render('avistamientos/index.html.twig', [
            'avistamientos' => $avistamientosRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_avistamientos_new', methods: ['GET', 'POST'])]
    public function new(Request $request, AvistamientosRepository $avistamientosRepository): Response
    {
        $avistamiento = new Avistamientos();
        $form = $this->createForm(AvistamientosType::class, $avistamiento);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $avistamientosRepository->save($avistamiento, true);

            return $this->redirectToRoute('app_avistamientos_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('avistamientos/new.html.twig', [
            'avistamiento' => $avistamiento,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_avistamientos_show', methods: ['GET'])]
    public function show(Avistamientos $avistamiento): Response
    {
        return $this->render('avistamientos/show.html.twig', [
            'avistamiento' => $avistamiento,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_avistamientos_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Avistamientos $avistamiento, AvistamientosRepository $avistamientosRepository): Response
    {
        $form = $this->createForm(AvistamientosType::class, $avistamiento);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $avistamientosRepository->save($avistamiento, true);

            return $this->redirectToRoute('app_avistamientos_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('avistamientos/edit.html.twig', [
            'avistamiento' => $avistamiento,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_avistamientos_delete', methods: ['POST'])]
    public function delete(Request $request, Avistamientos $avistamiento, AvistamientosRepository $avistamientosRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$avistamiento->getId(), $request->request->get('_token'))) {
            $avistamientosRepository->remove($avistamiento, true);
        }

        return $this->redirectToRoute('app_avistamientos_index', [], Response::HTTP_SEE_OTHER);
    }
}
