<?php

namespace App\Form;

use App\Entity\Avistamientos;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AvistamientosType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Fechas')
            ->add('Longitud')
            ->add('Latitud')
            ->add('Usuarios')
            ->add('Pajaros')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Avistamientos::class,
        ]);
    }
}
