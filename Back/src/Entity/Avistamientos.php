<?php

namespace App\Entity;

use App\Repository\AvistamientosRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AvistamientosRepository::class)]
class Avistamientos
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $Fechas = null;

    #[ORM\Column]
    private ?int $Longitud = null;

    #[ORM\Column]
    private ?int $Latitud = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?User $Usuarios = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?Birds $Pajaros = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFechas(): ?\DateTimeInterface
    {
        return $this->Fechas;
    }

    public function setFechas(\DateTimeInterface $Fechas): self
    {
        $this->Fechas = $Fechas;

        return $this;
    }

    public function getLongitud(): ?int
    {
        return $this->Longitud;
    }

    public function setLongitud(int $Longitud): self
    {
        $this->Longitud = $Longitud;

        return $this;
    }

    public function getLatitud(): ?int
    {
        return $this->Latitud;
    }

    public function setLatitud(int $Latitud): self
    {
        $this->Latitud = $Latitud;

        return $this;
    }

    public function getUsuarios(): ?User
    {
        return $this->Usuarios;
    }

    public function setUsuarios(?User $Usuarios): self
    {
        $this->Usuarios = $Usuarios;

        return $this;
    }

    public function getPajaros(): ?Birds
    {
        return $this->Pajaros;
    }

    public function setPajaros(?Birds $Pajaros): self
    {
        $this->Pajaros = $Pajaros;

        return $this;
    }
}
